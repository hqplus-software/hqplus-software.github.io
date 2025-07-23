import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.svg";

export default function Layout({ children }) {
  return (
    <div className="font-sans text-gray-800 scroll-smooth">
      <header className="fixed top-0 left-0 w-full backdrop-blur bg-white/80 shadow-sm z-50 border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <img src={logo} alt="HQ+ Software Logo" className="h-10 w-auto" />
            <span className="text-lg font-semibold text-gray-900">HQ+ Software</span>
          </div>
          <ul className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <li><a href="#leistungen" className="hover:text-blue-600 transition">Leistungen</a></li>
            <li><a href="#technologien" className="hover:text-blue-600 transition">Technologien</a></li>
            <li><a href="#zertifizierungen" className="hover:text-blue-600 transition">Zertifizierungen</a></li>
            <li><a href="#kontakt" className="hover:text-blue-600 transition">Kontakt</a></li>
            <li><a href="#projekte" className="hover:text-blue-600 transition">Projekte</a></li>
            <li><a href="#impressum" className="hover:text-blue-600 transition">Impressum</a></li>
            <li><a href="#datenschutz" className="hover:text-blue-600 transition">Datenschutz</a></li>
          </ul>
        </nav>
      </header>
      <main className="pt-20">{children}</main>
    </div>
  );
}