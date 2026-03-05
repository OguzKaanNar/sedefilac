import React, { useState, useEffect } from "react";
import "./Header.css";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container header-content">
        <a href="/" className="logo-container">
          {/* We use the clean logo if possible, but for demonstration we use the fetched asset */}
          <img src="/assets/logo02.png" alt="Sedefilac" className="logo-img" />
        </a>
        <nav className="desktop-nav">
          <a href="#about" className="nav-link">
            Hakkımızda
          </a>
          <a href="#services" className="nav-link">
            Analitik Hizmetler
          </a>
          <a href="#products" className="nav-link">
            Ürünlerimiz
          </a>
          <a href="#validation" className="nav-link">
            Validasyon
          </a>
          <a href="#guidelines" className="nav-link">
            Kılavuzlar
          </a>
        </nav>
        <div className="header-actions">
          <button className="btn btn-outline" aria-label="Language selector">
            En
          </button>
          <a
            href="#contact"
            className="btn btn-primary"
            style={{
              padding: "0.5rem 1rem",
              fontSize: "0.9rem",
              marginLeft: "10px",
            }}
          >
            Teklif İsteyin
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
