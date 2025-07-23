import React, { useState } from "react";
import logo from "./assets/logo.svg";

export default function Layout({ children }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navItems = [
    { label: "Leistungen", href: "#leistungen" },
    { label: "Technologien", href: "#technologien" },
    { label: "Zertifizierungen", href: "#zertifizierungen" },
    { label: "Projekte", href: "#projekte" },
    { label: "Unternehmen", href: "#unternehmen" },
  ];

  return (
    <div className="font-sans text-gray-800 scroll-smooth">
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="HQ+ Software Logo" className="h-8 w-auto" />
            <span className="text-lg font-semibold text-gray-900">HQ+</span>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8 text-sm font-medium text-gray-700">
            {navItems.map(({ label, href }) => (
              <li key={href}>
                <a href={href} className="hover:text-blue-600 transition">{label}</a>
              </li>
            ))}
          </ul>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#kontakt"
              className="px-4 py-1.5 rounded-full border border-gray-800 text-sm hover:bg-gray-800 hover:text-white transition"
            >
              Kontakt
            </a>
            <a
              href="#login"
              className="px-4 py-1.5 rounded-full border border-gray-400 text-sm text-gray-600 hover:border-gray-800 hover:text-gray-900 transition"
            >
              Login
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Dropdown */}
        {isMobileOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow">
            <ul className="flex flex-col p-4 space-y-2 text-sm text-gray-700">
              {navItems.map(({ label, href }) => (
                <li key={href}>
                  <a href={href} className="block py-2 hover:text-blue-600">{label}</a>
                </li>
              ))}
              <li>
                <a href="#kontakt" className="block py-2 font-medium text-gray-900 hover:text-blue-600">Kontakt</a>
              </li>
              <li>
                <a href="#login" className="block py-2 font-medium text-gray-900 hover:text-blue-600">Login</a>
              </li>
            </ul>
          </div>
        )}
      </header>

      <main className="pt-20">{children}</main>
    </div>
  );
}
