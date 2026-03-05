import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
        <img
          src="/assets/i2.jpg"
          alt="Sedefilac Laboratory"
          className="hero-img"
        />
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            GELİŞMİŞ FARMASÖTİK ANALİZ
          </motion.div>
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Küresel Uyumluluk İçin <br /> Kesin Analitik Çözümler.
          </motion.h1>
          <motion.p
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Uluslararası farmakopelerle uyumlu titiz validasyon, metot
            geliştirme ve kalite kontrol sağlayan kurumsal düzeyde bir
            laboratuvarla ortak olun.
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a href="#services" className="btn btn-primary hero-btn">
              Hizmetleri Keşfedin
            </a>
            <a href="#about" className="btn btn-outline hero-btn-outline">
              Yeteneklerimiz
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
