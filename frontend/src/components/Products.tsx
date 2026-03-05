import React from "react";
import { motion } from "framer-motion";
import "./Products.css";

const products = [
  {
    id: "eyeup",
    name: "EyeUp",
    category: "Göz Sağlığı",
    desc: "Yenilikçi formülasyonu ile oküler yüzeyin korunması ve nemlendirilmesi için geliştirilmiş ileri düzey solüsyon.",
    features: [
      "Uzun Süreli Nemlendirme",
      "Hücresel Yenilenme",
      "Koruyucu İçermez",
    ],
  },
  {
    id: "eyeup-fly",
    name: "EyeUp-Fly",
    category: "Göz Sağlığı",
    desc: "Hassas göz çevresi için özel olarak formüle edilmiş, çevresel faktörlere karşı maksimum koruma sağlayan bariyer teknolojisi.",
    features: ["Antioksidan Etki", "UV Hasarına Karşı Koruma", "Hızlı Emilim"],
  },
  {
    id: "eyeup-nero",
    name: "EyeUp-Nero",
    category: "Nöro-Oftalmoloji",
    desc: "Optik sinir fonksiyonlarını destekleyen ve nöroprotektif etki gösteren özel geliştirilmiş formül.",
    features: [
      "Nöroprotektif Kompleks",
      "Görsel Keskinlik Desteği",
      "Hedefli Dağılım",
    ],
  },
  {
    id: "hup-bex-nero",
    name: "HUP Bex Nero",
    category: "Nöroloji",
    desc: "Sinir sistemi sağlığını destekleyen, yüksek biyoyararlanıma sahip ileri derece kompleks tedavi bileşeni.",
    features: [
      "Yüksek Biyoyararlanım",
      "Hücresel Enerji Desteği",
      "Klinik Olarak Kanıtlanmış",
    ],
  },
];

const Products: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="products" className="products-section">
      <div className="container">
        <motion.div
          className="products-header center-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">ÖZEL ÜRÜN GRUBUMUZ</span>
          <h2 className="section-title">Yenilikçi Sağlık Çözümleri</h2>
          <p className="section-subtitle">
            Modern farmakoloji ve ileri biyoteknolojinin birleşimiyle
            geliştirilen, klinik olarak kanıtlanmış özel ürün portföyümüz.
          </p>
        </motion.div>

        <motion.div
          className="products-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="product-card"
              variants={cardVariants}
            >
              <div className="product-card-inner">
                <div className="product-category">{product.category}</div>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-desc">{product.desc}</p>
                <ul className="product-features">
                  {product.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <div className="product-action">
                  <a href="#contact" className="btn btn-outline product-btn">
                    Detaylı Bilgi
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
