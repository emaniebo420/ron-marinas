import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Footer } from "./components/ui";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function NotFound() {
  return (
    <main className="mx-auto max-w-[1200px] px-10 py-32">
      <h1 className="font-display text-6xl">Page not found</h1>
      <p className="mt-4 text-muted">
        <a href="/" className="underline">
          Back to the home page
        </a>
      </p>
    </main>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
