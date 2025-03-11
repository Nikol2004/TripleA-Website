"use client";
import { useState } from "react";
import Image from "next/image";
import "./globals.css"; // Ensure your CSS is linked

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body className="bg-[var(--primary-color)] text-[var(--text-light)]">
        {/* Navbar */}
        <nav className="bg-[var(--secondary-color)] text-white py-4 px-6 shadow-md fixed top-0 w-full z-50">
          <div className="container mx-auto flex justify-between items-center">
            {/* Logo */}
            
            <a href="/" className="flex items-center">
             <Image
              src="/AAAlogo.png"
              alt="Triple A Logo"
              width={60}
              height={60}
              className="h-14 w-auto"
             />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-white text-2xl focus:outline-none"
            >
              ☰
            </button>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex space-x-10 text-lg font-medium">
              <li><a href="#about" className="hover:text-gray-300 transition">About Us</a></li>
              <li><a href="#membership" className="hover:text-gray-300 transition">Membership</a></li>
              <li><a href="#news" className="hover:text-gray-300 transition">News</a></li>
              <li><a href="#directives" className="hover:text-gray-300 transition">Directives</a></li>
              <li><a href="#contact" className="hover:text-gray-300 transition">Contact Us</a></li>
            </ul>
          </div>

          {/* Mobile Dropdown Menu */}
          {menuOpen && (
            <div className="md:hidden bg-[var(--secondary-color)] text-white text-center py-4">
              <a href="#about" className="block py-2 hover:text-gray-300">About Us</a>
              <a href="#membership" className="block py-2 hover:text-gray-300">Membership</a>
              <a href="#news" className="block py-2 hover:text-gray-300">News</a>
              <a href="#directives" className="block py-2 hover:text-gray-300">Directives</a>
              <a href="#contact" className="block py-2 hover:text-gray-300">Contact Us</a>
            </div>
          )}
        </nav>

        {/* Page Content */}
        <div className="pt-20">{children}</div>
      </body>
    </html>
  );
}
