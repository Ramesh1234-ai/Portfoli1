import { useState } from "react";
import "./App.css";
import { Hero } from "./components/Hero";
import { Experience } from "./components/Experience";
import { Work } from "./components/Projects";
import { Skills } from "./components/Skills";
import { footer } from "./components/footer";
function App() {
  const Separator = ({ className = "" }) => (
    <div className={`separator ${className}`} />
  );
  return (
    <div style={{ background: "var(--background)", minHeight: "100vh" }}>
      <Hero />
      <Separator />
      <Skills />
      <Separator />
      <Experience />
      <Separator />
      <Work />
      <Separator />
      <footer />
    </div>
  );
}

export default App;
