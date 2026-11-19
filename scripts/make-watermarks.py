#!/usr/bin/env python3
"""Builds public/works/wm/<file>: watermarked copies (max 1400px wide) of every artwork in public/works.

The site swaps these in only when someone tries to save an image (right-click, long-press, drag),
so visitors never see the watermark while browsing. Re-run after adding or replacing an artwork:

    python3 scripts/make-watermarks.py
"""
import math
import sys
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "public" / "works"
OUT = SRC / "wm"
TEXT = "© Ron Mariñas"
SUBTEXT = "Boyong estuvo aquí"
OPACITY = 0.75
MAX_WIDTH = 1400
ANGLE = 28
FONT_CANDIDATES = [
    "/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf",
    "/usr/share/fonts/dejavu/DejaVuSerif.ttf",
    "/Library/Fonts/Georgia.ttf",
    "C:/Windows/Fonts/georgia.ttf",
]


def load_font(size: int) -> ImageFont.FreeTypeFont:
    for path in FONT_CANDIDATES:
        if Path(path).exists():
            return ImageFont.truetype(path, size)
    sys.exit("No serif font with ñ found; add a path to FONT_CANDIDATES.")


def tile_layer(size: tuple[int, int]) -> Image.Image:
    w, h = size
    font = load_font(max(20, int(w * 0.055)))
    alpha = int(255 * OPACITY)
    # one mark on its own canvas (main line + smaller second line), rotated, then tiled with a diagonal offset
    font2 = load_font(max(12, int(w * 0.03)))
    b1, b2 = font.getbbox(TEXT), font2.getbbox(SUBTEXT)
    w1, h1, w2, h2 = b1[2] - b1[0], b1[3] - b1[1], b2[2] - b2[0], b2[3] - b2[1]
    gap = int(h1 * 0.35)
    pad = 8
    mark = Image.new("RGBA", (max(w1, w2) + pad * 2, h1 + gap + h2 + pad * 2), (0, 0, 0, 0))
    d = ImageDraw.Draw(mark)
    for text, f, bb, tw_, y0 in ((TEXT, font, b1, w1, pad), (SUBTEXT, font2, b2, w2, pad + h1 + gap)):
        x0 = pad + (mark.width - pad * 2 - tw_) // 2
        d.text((x0 + 2, y0 + 2 - bb[1]), text, font=f, fill=(0, 0, 0, alpha))
        d.text((x0, y0 - bb[1]), text, font=f, fill=(255, 255, 255, alpha))
    mark = mark.rotate(ANGLE, expand=True, resample=Image.BICUBIC)
    layer = Image.new("RGBA", size, (0, 0, 0, 0))
    step_x, step_y = int(mark.width * 1.55), int(mark.height * 2.1)
    for row, y in enumerate(range(-mark.height, h + mark.height, step_y)):
        off = (row % 2) * (step_x // 2)
        for x in range(-mark.width + off, w + mark.width, step_x):
            layer.paste(mark, (x, y), mark)
    return layer


def main() -> None:
    OUT.mkdir(exist_ok=True)
    files = sorted(p for p in SRC.iterdir() if p.suffix.lower() in {".jpg", ".webp"})
    for path in files:
        im = Image.open(path).convert("RGBA")
        if im.width > MAX_WIDTH:
            im = im.resize((MAX_WIDTH, round(im.height * MAX_WIDTH / im.width)), Image.LANCZOS)
        layer = tile_layer(im.size)
        # keep transparent cutout backgrounds clean: only mark where the painting has pixels
        a = Image.composite(layer.getchannel("A"), Image.new("L", im.size, 0), im.getchannel("A"))
        layer.putalpha(a)
        out = Image.alpha_composite(im, layer)
        if path.suffix.lower() == ".jpg":
            out.convert("RGB").save(OUT / path.name, quality=80, optimize=True, progressive=True)
        else:
            out.save(OUT / path.name, quality=80, method=6)
        print(f"{path.name}: {(OUT / path.name).stat().st_size // 1024} KB")


if __name__ == "__main__":
    main()
