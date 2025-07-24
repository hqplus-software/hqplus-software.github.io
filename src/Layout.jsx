import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "./assets/logo.svg";

const navItems = [
  { label: "Leistungen", path: "/leistungen" },
  { label: "Technologien", path: "/technologien" },
  { label: "Zertifizierungen", path: "/zertifizierungen" },
  { label: "Projekte", path: "/projekte" },
  { label: "Unternehmen", path: "/unternehmen" },
];

export default function Layout({ children }) {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="font-sans text-gray-800 bg-white scroll-smooth">
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="HQ+ Logo" className="h-8 w-auto" />
            <span className="text-lg font-semibold text-gray-900">HQ+</span>
          </div>

          {/* Navigation */}
          <ul className="hidden md:flex justify-center flex-1 space-x-8 text-sm font-medium">
            {navItems.map(({ label, path }) => {
              const isActive = location.pathname === path;
              return (
                <li key={path}>
                  <Link
                    to={path}
                    className={`transition ${
                      isActive ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-500"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/kontakt"
              className="px-4 py-1.5 rounded-full border border-gray-800 text-sm hover:bg-gray-800 hover:text-white transition"
            >
              Kontakt
            </Link>
            <Link
              to="/login"
              className="px-4 py-1.5 rounded-full border border-gray-400 text-sm text-gray-600 hover:border-gray-800 hover:text-gray-900 transition"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-gray-700"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Dropdown */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow">
            <ul className="flex flex-col p-4 space-y-2 text-sm text-gray-700">
              {navItems.map(({ label, path }) => (
                <li key={path}>
                  <Link
                    to={path}
                    onClick={() => setMobileOpen(false)}
                    className={`block py-2 ${
                      location.pathname === path ? "text-blue-600 font-semibold" : "hover:text-blue-600"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/kontakt" className="block py-2">Kontakt</Link>
              </li>
              <li>
                <Link to="/login" className="block py-2">Login</Link>
              </li>
            </ul>
          </div>
        )}
      </header>

      <main className="pt-20">{children}</main>
    </div>
  );
}
