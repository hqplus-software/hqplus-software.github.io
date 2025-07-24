import './index.css';
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Leistungen from "./Leistungen";
import Technologien from "./Technologien";
import Zertifizierungen from "./Zertifizierungen";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leistungen" element={<Leistungen />} />
        <Route path="/technologien" element={<Technologien />} />
        <Route path="/zertifizierungen" element={<Zertifizierungen />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);