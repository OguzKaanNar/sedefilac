import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Contact.css";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    inquiryType: "general",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call for now
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        inquiryType: "general",
        message: "",
      });
    }, 4000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-grid">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">İletişime Geçin</h2>
            <p className="contact-subtitle">
              Sektörel iş birlikleri, yatırım fırsatları ve gelişmiş analitik
              laboratuvar hizmetlerimiz hakkında detaylı bilgi almak için
              kurumsal iletişim birimimizle iritibata geçebilirsiniz.
            </p>

            <div className="info-block">
              <h4 className="info-title">Merkez Laboratuvar</h4>
              <p className="info-text">
                Karasait Mah. Atatürk Cad. No:6/A
                <br />
                PK:37400 Taşköprü/Kastamonu, Türkiye
              </p>
            </div>

            <div className="info-block">
              <h4 className="info-title">Kurumsal İletişim</h4>
              <p className="info-text">
                <strong>E-Posta:</strong> info@sedefilac.com
                <br />
                <strong>Telefon:</strong> Müşteri temsilciniz ile görüşmek için
                formu doldurunuz.
              </p>
            </div>

            <div className="contact-trust-badge">
              <p>
                Tüm paydaşlarımızla yürütülen süreçler Gizlilik Sözleşmesi (NDA)
                ve KVKK yönergeleri kapsamında korunmaktadır.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-container"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {isSubmitted ? (
              <motion.div
                className="success-message"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="success-icon">✓</div>
                <h3>Talebiniz Alındı</h3>
                <p>
                  Kurumsal iletişim ekibimiz en kısa sürede sizinle iletişime
                  geçecektir.
                </p>
              </motion.div>
            ) : (
              <form className="corporate-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Ad Soyad *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Örn. Developer Oğuz Kaan NAR"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">Kurum / Şirket *</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      placeholder="Kurumunuz"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Kurumsal E-Posta *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="ad@kurum.com"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Telefon Nu.</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+90 (___) ___ __ __"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="inquiryType">İletişim Konusu</label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                  >
                    <option value="general">Genel Bilgi & Sorular</option>
                    <option value="analysis">Analitik Hizmet Talebi</option>
                    <option value="partnership">Stratejik İş Birliği</option>
                    <option value="investment">Yatırımcı İlişkileri</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Mesajınız *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Lütfen detayları belirtiniz..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary submit-btn">
                  Talebi Gönder
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
