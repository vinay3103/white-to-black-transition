import React from "react";
import { Parallax } from "react-scroll-parallax";
import LazyLoad from "react-lazy-load";
import { motion } from "framer-motion";
import "./Section.css";

const Section = ({ title, description, image, theory }) => {
  return (
    <motion.div
      className="section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h2 className="section-title">{title}</h2>
      <motion.div
        className="separator-line"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
      <p className="section-description">{description}</p>
      <div className="section-content">
        <Parallax speed={10}>
          <LazyLoad>
            <motion.img
              src={image}
              alt={title}
              className="section-image"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              style={{
                width: "600px", // Increased size while maintaining responsiveness
                // height: "auto", // Maintain aspect ratio
                borderRadius: "10px", // Optional styling for better aesthetics
              }}
            />
          </LazyLoad>
        </Parallax>
        <div
          className="section-theory"
          style={{
            fontSize: "1.6rem", // Increased font size
            lineHeight: "2.2rem", // Adjusted line height for better readability
            marginTop: "1rem",
          }}
        >
        <div
          className="section-description"
          style={{
            fontSize: "1.6rem", // Increased font size
            lineHeight: "2.2rem", // Adjusted line height for better readability
            marginTop: "1rem",
          }}
        >
          {Array.isArray(theory) ? (
            theory.map((paragraph, index) => (
              <motion.p
                key={index}
                className="section-paragraph"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.3 }}
                style={{ marginBottom: "1rem" }} // Added spacing between paragraphs
              >
                {paragraph}
              </motion.p>
            ))
          ) : (
            <motion.p
              className="section-paragraph"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              style={{ marginBottom: "1rem" }}
            >
              {theory}
            </motion.p>
          )}
        </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Section;
