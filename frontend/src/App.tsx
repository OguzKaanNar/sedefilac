import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustSignals from "./components/TrustSignals";
import ServicesGrid from "./components/ServicesGrid";
import Products from "./components/Products";
import About from "./components/About";
import Partners from "./components/Partners";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <TrustSignals />
        <About />
        <ServicesGrid />
        <Products />
        <Partners />
        <Contact />
      </main>

      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-brand">
            <img
              src="/assets/logo02.png"
              alt="Sedefilac"
              className="footer-logo"
            />
            <p>
              Sedef İlaç San. ve Tic. A.Ş.
              <br />
              Gelişmiş Analitik Validasyon Laboratuvarı.
            </p>
          </div>
          <div className="footer-links">
            <div className="link-column">
              <h4>Hizmetler</h4>
              <a href="#">Metot Geliştirme</a>
              <a href="#">Validasyonlar</a>
              <a href="#">Stabilite Çalışmaları</a>
            </div>
            <div className="link-column">
              <h4>Kurumsal</h4>
              <a href="#about">Hakkımızda</a>
              <a href="#guidelines">Kılavuzlar</a>
              <a href="#contact">İletişim</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <p>
              &copy; {new Date().getFullYear()} Sedefilac. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
