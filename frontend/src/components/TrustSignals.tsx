import React from "react";
import { motion } from "framer-motion";
import "./TrustSignals.css";

const TrustSignals: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="guidelines" className="trust-signals">
      <div className="container trust-container">
        <p className="trust-label">ULUSLARARASI STANDARTLARA UYGUNDUR</p>
        <motion.div
          className="trust-logos"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div className="trust-logo-box" variants={itemVariants}>
            <div
              className="svg-logo"
              style={{
                marginBottom: "10px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <svg
                viewBox="0 0 100 40"
                width="100"
                height="40"
                fill="var(--text-muted)"
              >
                <path
                  d="M10,20 L30,20 M20,10 L20,30"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <circle
                  cx="20"
                  cy="20"
                  r="15"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                />
                <text
                  x="40"
                  y="26"
                  fontSize="18"
                  fontWeight="bold"
                  fontFamily="sans-serif"
                >
                  TÜRK
                </text>
              </svg>
            </div>
            <span
              className="trust-sub"
              style={{ fontSize: "0.85rem", textTransform: "uppercase" }}
            >
              Ulusal Standartlar
            </span>
          </motion.div>

          <motion.div className="trust-logo-box" variants={itemVariants}>
            <div
              className="svg-logo"
              style={{
                marginBottom: "10px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <svg
                viewBox="0 0 100 40"
                width="100"
                height="40"
                fill="var(--text-muted)"
              >
                <rect
                  x="5"
                  y="5"
                  width="26"
                  height="26"
                  rx="4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                />
                <path
                  d="M10,10 L26,26 M26,10 L10,26"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <text
                  x="45"
                  y="26"
                  fontSize="22"
                  fontWeight="bold"
                  fontFamily="sans-serif"
                >
                  EP
                </text>
              </svg>
            </div>
            <span
              className="trust-sub"
              style={{ fontSize: "0.85rem", textTransform: "uppercase" }}
            >
              Avrupa Farmakopesi
            </span>
          </motion.div>

          <motion.div className="trust-logo-box" variants={itemVariants}>
            <div
              className="svg-logo"
              style={{
                marginBottom: "10px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <svg
                viewBox="0 0 100 40"
                width="100"
                height="40"
                fill="var(--text-muted)"
              >
                <path
                  d="M10,10 Q20,30 30,10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <circle cx="20" cy="25" r="4" fill="currentColor" />
                <text
                  x="45"
                  y="26"
                  fontSize="22"
                  fontWeight="bold"
                  fontFamily="sans-serif"
                >
                  USP
                </text>
              </svg>
            </div>
            <span
              className="trust-sub"
              style={{ fontSize: "0.85rem", textTransform: "uppercase" }}
            >
              Amerika Farmakopesi
            </span>
          </motion.div>

          <motion.div className="trust-logo-box" variants={itemVariants}>
            <div
              className="svg-logo"
              style={{
                marginBottom: "10px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <svg
                viewBox="0 0 100 40"
                width="100"
                height="40"
                fill="var(--text-muted)"
              >
                <path
                  d="M15,10 C25,10 25,30 15,30 Z M20,20 C30,20 30,40 20,40 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                />
                <text
                  x="45"
                  y="26"
                  fontSize="22"
                  fontWeight="bold"
                  fontFamily="sans-serif"
                >
                  EMA
                </text>
              </svg>
            </div>
            <span
              className="trust-sub"
              style={{ fontSize: "0.85rem", textTransform: "uppercase" }}
            >
              Avrupa İlaç Ajansı
            </span>
          </motion.div>

          <motion.div className="trust-logo-box" variants={itemVariants}>
            <div
              className="svg-logo"
              style={{
                marginBottom: "10px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <svg
                viewBox="0 0 100 40"
                width="100"
                height="40"
                fill="var(--text-muted)"
              >
                <ellipse
                  cx="20"
                  cy="20"
                  rx="14"
                  ry="7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  transform="rotate(20 20 20)"
                />
                <ellipse
                  cx="20"
                  cy="20"
                  rx="14"
                  ry="7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  transform="rotate(-20 20 20)"
                />
                <text
                  x="45"
                  y="26"
                  fontSize="22"
                  fontWeight="bold"
                  fontFamily="sans-serif"
                >
                  FDA
                </text>
              </svg>
            </div>
            <span
              className="trust-sub"
              style={{ fontSize: "0.85rem", textTransform: "uppercase" }}
            >
              Amerika Gıda ve İlaç Dairesi
            </span>
          </motion.div>

          <motion.div className="trust-logo-box" variants={itemVariants}>
            <div
              className="svg-logo"
              style={{
                marginBottom: "10px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <svg
                viewBox="0 0 100 40"
                width="100"
                height="40"
                fill="var(--text-muted)"
              >
                <path
                  d="M10,20 L30,20 M20,10 L20,30 M13,13 L27,27 M13,27 L27,13"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <text
                  x="45"
                  y="26"
                  fontSize="22"
                  fontWeight="bold"
                  fontFamily="sans-serif"
                >
                  ICH
                </text>
              </svg>
            </div>
            <span
              className="trust-sub"
              style={{ fontSize: "0.85rem", textTransform: "uppercase" }}
            >
              Uluslararası Uyum Konseyi
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSignals;
