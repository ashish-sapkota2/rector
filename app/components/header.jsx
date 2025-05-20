"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/home", label: "HOME" },
    { href: "/aboutus", label: "ABOUT US" },
    { href: "/services", label: "SERVICES" },
    { href: "/career", label: "CAREER" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 w-full py-3 z-10">
      <nav className="container mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/lg.png" alt="Company Logo" width={100} height={50} />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 flex-grow justify-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative text-lg font-semibold pb-1 text-black"
              >
                {link.label}
                {/* underline span */}
                <span
                  className={`absolute left-0 bottom-0 h-0.5 bg-blue-600 transition-all duration-300 ease-in-out ${
                    pathname === link.href ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* Contact Us Button */}
        <Link
          href="/contactus"
          className="hidden md:block bg-blue-600 text-white font-bold text-lg px-6 py-3 rounded-full shadow-md transition-all duration-300 hover:bg-white hover:text-blue-600 hover:border hover:border-blue-600 hover:shadow-xl hover:-translate-y-1"
        >
          INNOVATE WITH US →
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl ml-4"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <ul className="md:hidden bg-white shadow-md absolute w-full left-0 top-[60px] p-4 space-y-4 text-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block py-2 font-bold ${
                  pathname === link.href
                    ? "text-blue-600"
                    : "text-gray-800 hover:text-blue-600"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contactus"
              className="block py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700"
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
}
