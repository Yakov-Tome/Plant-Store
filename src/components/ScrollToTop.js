"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) setShow(true);
      else setShow(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!show) return null;

  return (
    <button
      onClick={scrollUp}
      aria-label="חזרה לראש העמוד"
      className="
        fixed bottom-6 right-6 z-50
        bg-white/70 text-(--leaf-new) p-3 rounded-full shadow-xl
        hover:bg-white/90 transition
        focus:outline-none focus:ring-1 focus:ring-( --leaf-new)/70 focus:ring-offset-1
        cursor-pointer
      "
    >
      <FaArrowUp size={20} />
    </button>
  );
}
