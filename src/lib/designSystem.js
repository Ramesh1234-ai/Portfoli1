// Design System - Single source of truth for spacing, typography, colors
export const DESIGN_SYSTEM = {
  // Spacing scale (base 8px)
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    "2xl": "40px",
    "3xl": "48px",
    "4xl": "64px",
    "5xl": "80px",
  },

  // Typography system
  typography: {
    h1: {
      fontSize: "clamp(2.5rem, 8vw, 4rem)",
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: "-0.02em",
      fontFamily: "system-ui, -apple-system, sans-serif",
    },
    h2: {
      fontSize: "clamp(2rem, 5vw, 3rem)",
      fontWeight: 600,
      lineHeight: 1.3,
      letterSpacing: "-0.01em",
      fontFamily: "system-ui, -apple-system, sans-serif",
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 600,
      lineHeight: 1.4,
      fontFamily: "system-ui, -apple-system, sans-serif",
    },
    body: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.6,
      fontFamily: "system-ui, -apple-system, sans-serif",
    },
    caption: {
      fontSize: "0.875rem",
      fontWeight: 500,
      lineHeight: 1.5,
      fontFamily: "system-ui, -apple-system, sans-serif",
    },
  },

  // Color system
  colors: {
    accent: "#E07845",
    accentSecondary: "#c084fc",
    textPrimary: "#000",
    textSecondary: "#4b5563",
    textTertiary: "#9ca3af",
    border: "#e5e7eb",
    background: "#ffffff",
    darkBg: "#1a1a1a",
    darkText: "#e5e7eb",
    darkBorder: "#2e303a",
  },

  // Media queries
  breakpoints: {
    mobile: "320px",
    tablet: "641px",
    desktop: "1025px",
  },

  // Animation/transition
  transition: "all 0.3s ease",
};

// Breakpoint helper functions
export const MEDIA = {
  mobile: "@media (max-width: 640px)",
  tablet: "@media (min-width: 641px) and (max-width: 1024px)",
  desktop: "@media (min-width: 1025px)",
};
