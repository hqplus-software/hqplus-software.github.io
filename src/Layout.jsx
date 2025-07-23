import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.svg";

export default function Layout({ children }) {
  return (
    <div className="font-sans text-gray-800 scroll-smooth">
      <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow z-50">
        <nav className="container mx-auto flex justify-between items-center p-4">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="HQ+ Software Logo" className="h-12 w-auto" />
          </div>
          <ul className="flex space-x-6">
            <li><a href="#leistungen" className="text-white hover:text-blue-200">Leistungen</a></li>
            <li><a href="#technologien" className="text-white hover:text-blue-200">Technologien</a></li>
            <li><a href="#zertifizierungen" className="text-white hover:text-blue-200">Zertifizierungen</a></li>
            <li><a href="#kontakt" className="text-white hover:text-blue-200">Kontakt</a></li>
            <li><a href="#impressum" className="text-white hover:text-blue-200">Impressum</a></li>
            <li><a href="#datenschutz" className="text-white hover:text-blue-200">Datenschutz</a></li>
            <li><a href="#projekte" className="text-white hover:text-blue-200">Projekte</a></li>
          </ul>
        </nav>
      </header>
      <main className="pt-24">{children}</main>
    </div>
  );
}