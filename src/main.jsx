import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "animate.css"; // ⬅️ Importa Animate.css aquí

import { HeroesApp } from "./HeroesApp";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <HeroesApp />
    </Router>
  </StrictMode>
);
