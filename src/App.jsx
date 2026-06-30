import { useState } from "react";
import { Hero } from "./components/Hero";
import { Experience } from "./components/Experience";
import { Work } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Activity } from "./components/Activity";
import { Contact } from "./components/contact";
import { SiLeetcode } from "react-icons/si";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import NavDock from "./components/footer";
import {SocialFlipButton} from "./components/connect";
export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("theme", !darkMode ? "dark" : "light");
  };
  const Separator = ({ className = "" }) => (
    <div
      className={`separator ${className}`}
      style={{
        borderColor: darkMode ? "#444" : "#e5e7eb",
      }}
    />
  );
  const currentYear = new Date().getFullYear();
  return (
    <div
      style={{
        position: "relative",
        background: darkMode ? "#1a1a1a" : "#fff",
        minHeight: "100vh",
        color: darkMode ? "#e5e7eb" : "#000",
        transition: "background 0.3s ease, color 0.3s ease",
      }}
    >
      {/* Background gradient overlay */}
      <div
        style={{
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 0.6,
          mixBlendMode: "multiply",
          pointerEvents: "none",
          zIndex: -1,
        }}
      />
      <div style={{ position: "relative", zIndex: 1 }}>
        <NavDock darkMode={darkMode} toggleTheme={toggleTheme} />
        <Hero />
        <Separator />
        <Skills />
        <Separator />
        <Experience />
        <Separator />
        <Work />
        <Separator />
        <Activity />
        <Separator />
        <Contact
          theme={
            darkMode
              ? {
                  text: "#e5e7eb",
                  accent: "#ff8000",
                  border: "#2e303a",
                  background: "#1a1a1a",
                  surface: "#222",
                }
              : {
                  text: "#000",
                  accent: "#E07845",
                  border: "#e5e7eb",
                  background: "#fff",
                  surface: "#fafafa",
                }
          }
        />
        <footer
          style={{
            background: darkMode ? "#0f0f0f" : "#fafafa",
            borderTop: darkMode ? "1px solid #333" : "1px solid #e5e7eb",
            padding: "40px 20px",
            marginTop: "80px",
            transition: "all 0.3s ease",
          }}
        >
            <div
            style={{
              maxWidth: 1100,
              margin: "0 auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "nowrap",
              gap: "16px",
            }}
          >
            <div style={{ minWidth: 0 }}>
              <p
                style={{
                  color: darkMode ? "#b0b0b0" : "#666",
                  fontSize: "clamp(10px, 2.5vw, 14px)",
                  margin: 0,
                  fontWeight: 500,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  transition: "color 0.3s ease",
                }}
              >
                © {currentYear} Rishit Sinha. All rights reserved.
              </p>
              <p
                style={{
                  color: darkMode ? "#888" : "#999",
                  fontSize: "clamp(9px, 2vw, 12px)",
                  margin: "4px 0 0 0",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  transition: "color 0.3s ease",
                }}
              >
                Building systems that scale.
              </p>
            </div>
            <div style={{ flexShrink: 0 }}>
              <SocialFlipButton />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
