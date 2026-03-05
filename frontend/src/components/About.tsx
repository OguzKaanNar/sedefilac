import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container" style={{ padding: "4rem 0" }}>
        <motion.div
          className="about-grid"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="about-content">
            <h2 className="section-title">Kurumsal Kimliğimiz</h2>
            <p className="about-intro">
              Bilim ve ileri teknolojiye dayalı üretim süreçleriyle; "Geleceğe
              Sağlıklı Dokunuşlar"
            </p>

            <div className="about-block">
              <h3 className="about-block-title">Misyonumuz</h3>
              <p>
                Sedef İlaç ve Medikal Ürünleri Ltd. Şti. ilaç sektöründeki tüm
                paydaşlarına bilimsel mükemmeliyetle süreç danışmanlığı ile
                analiz hizmetlerini sunarak, sağlık alanındaki güvenliği ve
                etkinliği yüksek çözümler sunmayı hedeflemiştir. Bu amaçla
                bilimsel doğruluğa ve uluslararası kalite standartlarına dayalı
                hizmetler sunarak, ilaç geliştirme süreçlerine destek
                olmaktadır. Tüm süreçlerimizde etik standartlara sadık kalarak,
                yüksek hassasiyetle gerçekleştirdiğimiz testler, düzenleyici
                gereksinimlere tam uyumlu raporlamalar ve hızlı geri dönüşler
                ile müşterilerimizin ürünlerinin güvenliğini ve etkinliğini
                onaylamak için güvenilir bir iş ortağı olmayı taahhüt
                etmekteyiz.
              </p>
            </div>

            <div className="about-block">
              <h3 className="about-block-title">Vizyonumuz</h3>
              <p>
                İnsan yaşamını dönüştürecek ilaç çözümleri geliştiren, küresel
                ilaç sektöründe referans bir şirket olmayı hedefliyoruz.
                Yenilikçi araştırma ve geliştirme faaliyetlerimiz ile sektöre
                etkili ilaçları sunarak, dünya çapında sağlık alanında kalıcı
                bir fark yaratmak için çalışıyoruz. Müşterilerimize ve
                toplumumuza en yüksek değerleri sunarak, global sağlık
                sorunlarına sürdürülebilir çözümler üreten, güvenilir bir marka
                olmayı vizyon edinmiş bulunuyoruz.
              </p>
            </div>

            <div className="about-block">
              <h3 className="about-block-title">Kalite Politikamız</h3>
              <p>
                Firmamız ilaç endüstrisinin en yüksek standartlarını
                benimseyerek, hastaların yaşam kalitesini artırmaya yönelik
                güvenli, etkili ve inovatif ürünler geliştirmeyi hedeflemiştir.
                Bu amaçla Sedef İlaç ve Medikal Ürünleri Ltd. Şti. ilaç
                analizleri ve test süreçlerinde en yüksek kaliteyi sağlamak için
                uluslararası standartlara ve düzenlemelere sıkı sıkıya bağlı
                kalmaktadır. Güvenilir ve doğru sonuçlar elde etmek için en
                güncel teknolojileri kullanarak, sürekli iyileştirme ve
                mükemmeliyet anlayışıyla çalışmaktadır. Ayrıca çalışanlarımızın
                uzmanlığı, valide analiz yöntemlerimiz ve titiz kalite kontrol
                süreçlerimiz sayesinde, ilaç firmalarına güvenli, hızlı ve doğru
                test sonuçları sunmayı hedeflemekteyiz.
              </p>
            </div>
          </div>

          <motion.div
            className="about-image-wrapper"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <img
              src="/assets/i4.jpg"
              alt="Laboratuvar Çalışmaları"
              className="about-image"
            />
            <div className="about-experience-badge">
              <span className="experience-year">2025</span>
              <span className="experience-text">Kuruluş Yılı</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
