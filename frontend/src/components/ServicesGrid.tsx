import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./ServicesGrid.css";

const services = [
  {
    id: "method-dev",
    icon: "/assets/i1.svg",
    title: "Metot Geliştirme",
    desc: "Karmaşık farmasötik formülasyonlar ve zorlu etken maddeler için özel olarak tasarlanmış analitik metotlar.",
    details: [
      "Etken Madde Miktar Tayini",
      "Safsızlık Miktar Tayini",
      "In-vitro Release Testleri",
    ],
  },
  {
    id: "validation-protocol",
    icon: "/assets/i4.svg",
    title: "Validasyon Protokolü",
    desc: "Uluslararası kılavuzlara (ICH, FDA, EMA) tam uyum sağlayan kapsamlı doğrulama protokollerinin hazırlanması.",
    details: [
      "Spesifiklik ve Doğrusallık",
      "Doğruluk ve Kesinlik",
      "Sağlamlık Testleri",
    ],
  },
  {
    id: "method-validation",
    icon: "/assets/i2.svg",
    title: "Metot Validasyonu",
    desc: "Geliştirilen metotların ürün yaşam döngüsü boyunca güvenilirliğini kanıtlayan titiz validasyon çalışmaları.",
    details: [
      "Analitik Metot Transferi",
      "Validasyon Raporlaması",
      "Stabilite Örnekleri Analizi",
    ],
  },
  {
    id: "validation-report",
    icon: "/assets/i3.svg",
    title: "Validasyon Raporu",
    desc: "Düzenleyici kurumlara sunulmaya hazır, uluslararası standartlarda eksiksiz ve detaylı validasyon raporları.",
    details: [
      "Regülasyon Uyumluluğu",
      "Veri Bütünlüğü",
      "Genişletilmiş Dokümantasyon",
    ],
  },
];

const ServicesGrid: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="services" className="services-section">
      <div className="container">
        <motion.div
          className="services-header center-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Analitik Hizmetlerimiz</h2>
          <p className="section-subtitle">
            Ürün geliştirme aşamasından piyasaya sürmeye kadar tam kapsamlı
            farmasötik analiz çözümleri.
          </p>
        </motion.div>

        <div
          id="validation"
          style={{ position: "absolute", marginTop: "-100px" }}
        ></div>
        <div className="services-container">
          <div className="services-tabs">
            {services.map((service, index) => (
              <motion.button
                key={service.id}
                className={`service-tab ${activeTab === index ? "active" : ""}`}
                onClick={() => setActiveTab(index)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {service.title}
              </motion.button>
            ))}
          </div>

          <div className="service-content-area">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                className="service-card-wrapper"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="service-card">
                  <div className="service-card-header">
                    {/* Using a generic shape if svg isn't available */}
                    <div className="service-icon">
                      <img
                        src={services[activeTab].icon}
                        alt=""
                        onError={(e) => {
                          e.currentTarget.src =
                            'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>';
                        }}
                      />
                    </div>
                    <h3>{services[activeTab].title}</h3>
                  </div>
                  <p className="service-desc">{services[activeTab].desc}</p>
                  <ul className="service-features">
                    {services[activeTab].details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="btn btn-outline"
                    style={{ marginTop: "2rem" }}
                  >
                    Detaylı Bilgi
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
