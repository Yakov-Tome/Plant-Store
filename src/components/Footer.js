import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import Link from "next/link";

function Footer() {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10 font-mono">
      <nav className="grid grid-flow-col gap-4">
        <Link href="/" className="link link-hover">
          בית
        </Link>
        <Link href="/catalog" className="link link-hover">
          קטלוג מוצרים
        </Link>
        <Link href="/faq" className="link link-hover">
          שאלות נפוצות
        </Link>
        <Link href="/contact" className="link link-hover">
          צור קשר
        </Link>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://www.instagram.com/mashtela_neve_tzedek?igsh=d21lZmhwcm1uZzk%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FF1B73] duration-300 cursor-pointer hover:scale-110"
            aria-label="Instagram"
          >
            <FaInstagramSquare size={26} />
          </a>
          <a
            href="https://www.facebook.com/share/17c1yh2YGV/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0566ff] duration-300 cursor-pointer hover:scale-110"
            aria-label="Facebook"
          >
            <FaFacebookF size={24} />
          </a>
        </div>
      </nav>
      <aside>
        <p>© {new Date().getFullYear()} כל הזכויות שמורות • המשתלה</p>
      </aside>
    </footer>
  );
}

export default Footer;
