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
            <li><Link to="/">Home</Link></li>
            <li><Link to="/leistungen">Leistungen</Link></li>
            <li><Link to="/technologien">Technologien</Link></li>
            <li><Link to="/zertifizierungen">Zertifizierungen</Link></li>
          </ul>
        </nav>
      </header>
      <main className="pt-24">{children}</main>
    </div>
  );
}