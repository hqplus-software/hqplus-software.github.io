// HQ+ Software React One-Pager with GitHub Pages Deployment (Vite + TailwindCSS)

import React from "react";
import logo from "./assets/logo.svg";

export default function App() {
  return (
    <div className="font-sans text-gray-800 scroll-smooth">
      {/* Navigation */}
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

      <main className="pt-24">
        {/* Hero Section */}
        <section
          className="relative bg-cover bg-center text-white"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1525199428030-98e22f1b4d20?auto=format&fit=crop&w=1350&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-blue-900/70" />
          <div className="relative container mx-auto px-4 py-32 text-center">
            <h1 className="text-5xl font-bold mb-4">High Quality Softwarelösungen</h1>
            <p className="text-xl mb-8">Zuverlässig. Skalierbar. Nachhaltig.</p>
            <a
              href="#kontakt"
              className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded shadow hover:bg-blue-50"
            >
              Kontakt aufnehmen
            </a>
          </div>
        </section>

        {/* Leistungen */}
        <section id="leistungen" className="py-16 container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-8">Leistungen</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=60"
                alt="Softwareentwicklung"
                className="w-full h-32 object-cover rounded"
              />
              <h3 className="font-bold mt-4">Softwareentwicklung</h3>
              <ul className="list-disc ml-6 mt-2">
                <li>Java (Spring), C#</li>
                <li>Eclipse Plugin Entwicklung</li>
                <li>Android App Entwicklung</li>
                <li>Embedded SW</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <img
                src="https://images.unsplash.com/photo-1526378722447-4ec1c2dcbc26?auto=format&fit=crop&w=800&q=60"
                alt="Testautomatisierung"
                className="w-full h-32 object-cover rounded"
              />
              <h3 className="font-bold mt-4">Testautomatisierung</h3>
              <ul className="list-disc ml-6 mt-2">
                <li>Test-Driven Development</li>
                <li>Jenkins, CI/CD</li>
                <li>Safety-kritische Toolchains</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <img
                src="https://images.unsplash.com/photo-1581091012184-d1b0ec77a051?auto=format&fit=crop&w=800&q=60"
                alt="Schnittstellen und Tools"
                className="w-full h-32 object-cover rounded"
              />
              <h3 className="font-bold mt-4">Schnittstellen &amp; Tools</h3>
              <ul className="list-disc ml-6 mt-2">
                <li>IBM Jazz, OSLC, PTC Integrity</li>
                <li>MediaWiki, SharePoint</li>
                <li>Evergreen IT, Dokumentenmanagement</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <img
                src="https://images.unsplash.com/photo-1581093588401-22a3fb320f52?auto=format&fit=crop&w=800&q=60"
                alt="Datenanalyse"
                className="w-full h-32 object-cover rounded"
              />
              <h3 className="font-bold mt-4">Datenanalyse</h3>
              <ul className="list-disc ml-6 mt-2">
                <li>Qlik, Power BI</li>
                <li>Amazon Web Services Basics</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technologien */}
        <section id="technologien" className="py-16 bg-gray-50 container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-6">Technologien</h2>
          <p className="leading-relaxed">Java, C#, Spring, Jenkins, Git, Qlik, Power BI, AWS, Android, Eclipse, OSLC, IBM Jazz, SharePoint, Media Wiki, PTC Integrity, CI/CD, Embedded, Safety-Kritisch, Build-Toolchains.</p>
        </section>

        {/* Zertifizierungen */}
        <section id="zertifizierungen" className="py-16 container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-6">Zertifizierungen</h2>
          <ul className="list-disc ml-6">
            <li>ISTQB Certified Tester</li>
            <li>SAFe 5 Advanced Scrum Master</li>
            <li>INCOSE ASEP (Associate Systems Engineering Professional)</li>
          </ul>
        </section>

        {/* Kontakt */}
        <section id="kontakt" className="py-16 bg-blue-50 container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-6">Kontakt</h2>
          <p className="mb-4">E-Mail: <a href="mailto:info@hqapps.de" className="text-blue-600">info@hqapps.de</a></p>
          <p>GitHub: <a href="https://github.com/hqplus-software" className="text-blue-600">github.com/hqplus-software</a></p>
        </section>

        {/* Impressum */}
        <section id="impressum" className="py-16 container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-6">Impressum</h2>
          <p>Angaben gemäß § 5 TMG</p>
          <p className="mt-2 font-semibold">HQ+ Software</p>
          <p>Max Mustermann<br/>Beispielstraße 123<br/>12345 Musterstadt</p>
          <p className="mt-4">E-Mail: <a href="mailto:info@hqapps.de" className="text-blue-600">info@hqapps.de</a></p>
          <p>Umsatzsteuer-ID: DE123456789</p>
        </section>

        {/* Datenschutz */}
        <section id="datenschutz" className="py-16 container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-6">Datenschutzerklärung</h2>
          <p>Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Personenbezogene Daten werden auf dieser Webseite nur im technisch notwendigen Umfang erhoben. In keinem Fall werden die erhobenen Daten verkauft oder aus anderen Gründen an Dritte weitergegeben.</p>

          <h3 className="mt-6 font-bold">Verantwortliche Stelle</h3>
          <p className="mt-2">HQ+ Software<br/>Max Mustermann<br/>Beispielstraße 123<br/>12345 Musterstadt</p>

          <h3 className="mt-6 font-bold">Erhebung und Verarbeitung personenbezogener Daten</h3>
          <p className="mt-2">Beim Besuch dieser Website speichern die Webserver standardmäßig die IP-Adresse, die Webseite, von der aus Sie uns besuchen, die Seiten, die Sie bei uns besuchen sowie das Datum und die Dauer des Besuches.</p>

          <h3 className="mt-6 font-bold">Auskunftsrecht</h3>
          <p className="mt-2">Sie haben jederzeit das Recht auf Auskunft über die bezüglich Ihrer Person gespeicherten Daten, deren Herkunft und Empfänger sowie den Zweck der Speicherung.</p>
        </section>
      </main>

      <footer className="bg-gray-100 text-center py-6 text-sm mt-10">
        <div>
          © {new Date().getFullYear()} HQ+ Software – HighQUality Applications
        </div>
        <div className="mt-2 space-x-4">
          <a href="/impressum.html" className="text-blue-600 hover:underline">Impressum</a>
          <a href="/datenschutz.html" className="text-blue-600 hover:underline">Datenschutz</a>
        </div>
      </footer>
    </div>
  );
}

