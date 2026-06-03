import { useState } from "react";
import profilepic from "../../src/assets/profile.png"
const navItems = [
  { label: "Home", id: "home" },
  { label: "Skills", id: "skills" },
  { label: "Work", id: "work" },
  { label: "Experience", id: "experience"},
  { label: "Activity", id:"Activity"}
];

export default function NavDock() {
  const [activeItem, setActiveItem] = useState("home");
  const [hovered, setHovered] = useState(null);

  const scrollToSection = (id) => {
    setActiveItem(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 1000,
      }}
    >
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          background: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(10px)",
          border: "1px solid #e5e7eb",
          borderRadius: "40px",
          padding: "3px 4px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
          transition: "all 0.3s ease",
        }}
      >
        {/* Logo/Brand */}
        <img
          src={profilepic}
          style={{
            marginRight: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #E07845 0%, #ff9466 100%)",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "14px",
          }}
        >
          
        </img>

        {/* Nav Items */}
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            onMouseEnter={() => setHovered(item.id)}
            onMouseLeave={() => setHovered(null)}
            style={{
              position: "relative",
              padding: "8px 16px",
              fontSize: "14px",
              fontWeight: 500,
              border: "none",
              background: "transparent",
              cursor: "pointer",
              transition: "all 0.2s ease",
              color:
                activeItem === item.id
                  ? "#E07845"
                  : hovered === item.id
                    ? "#171717"
                    : "#666",
              textDecoration: "none",
            }}
          >
            {item.label}

            {/* Active underline */}
            {activeItem === item.id && (
              <div
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  right: "0",
                  height: "2px",
                  background: "#E07845",
                  borderRadius: "1px",
                }}
              />
            )}
          </button>
        ))}

        {/* Divider */}
        <div
          style={{
            width: "1px",
            height: "20px",
            background: "#e5e7eb",
            margin: "0 8px",
          }}
        />

        {/* Theme Toggle Button */}
        <button
          style={{
            width: "36px",
            height: "36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            border: "none",
            background: "transparent",
            cursor: "pointer",
            color: "#666",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#f0f0f0";
            e.currentTarget.style.color = "#171717";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "#666";
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        </button>
      </nav>
    </div>
  );
}
