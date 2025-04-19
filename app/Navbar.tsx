"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="bg-[#0c0c0c] text-white fixed top-0 w-full z-50">
      <div className="w-full px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 text-xl font-semibold">
          <Image src="/AAAlogo.png" alt="Triple A Logo" width={80} height={40} />
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl focus:outline-none"
        >
          ☰
        </button>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-10 text-base font-medium tracking-wide">
          <NavItem href="/about" label="About" />
          <NavItem href="/apply" label="Apply" />
          <NavItem href="/executive" label="Executive Branch" />
          <NavItem href="/contact" label="Contact" />
        </ul>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-[#0c0c0c] text-white px-6 py-4 space-y-3 text-base">
          {[
            { href: "/about", label: "About" },
            { href: "/apply", label: "Apply" },
            { href: "/executive", label: "Executive Branch" },
            { href: "/contact", label: "Contact" },
          ].map(({ href, label }, i) => (
            <Link
              key={i}
              href={href}
              onClick={closeMenu}
              className="block py-2 hover:text-[#a78bfa] transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

function NavItem({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link
        href={href}
        className="hover:text-[#a78bfa] transition-colors duration-200"
      >
        {label}
      </Link>
    </li>
  );
}
