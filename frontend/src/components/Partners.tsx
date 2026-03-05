import React from "react";
import { motion } from "framer-motion";
import "./Partners.css";

const partnersList = [
  {
    name: "ARGEFAR",
    desc: "Ege Üniversitesi İlaç Geliştirme ve Farmakokinetik Araştırma Uygulama Merkezi",
  },
  {
    name: "ŞANLI İLAÇ",
    desc: "Şanlı İlaç Sanayi A.Ş.",
  },
  {
    name: "GEN",
    desc: "Gen İlaç ve Sağlık Ürünleri Sanayi ve Ticaret A.Ş.",
  },
];

const Partners: React.FC = () => {
  return (
    <section className="partners-section">
      <div className="container">
        <motion.div
          className="section-header text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">İş Birliklerimiz</h2>
          <p className="section-subtitle">
            Sedef İlaç olarak Ege Üniversitesi İlaç Geliştirme ve Farmakokinetik
            Araştırma Uygulama Merkezi (ARGEFAR) ve sektörün öncü firmalarıyla
            yürütülen işbirliği kapsamında ürün geliştirme çalışmaları
            yürütülmektedir.
          </p>
        </motion.div>

        <div className="partners-grid">
          {partnersList.map((partner, idx) => (
            <motion.div
              key={idx}
              className="partner-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <div className="partner-logo-placeholder">
                <span className="partner-name">{partner.name}</span>
              </div>
              <p className="partner-desc">{partner.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
