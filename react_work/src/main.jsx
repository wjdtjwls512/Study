import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from './01_component/App.jsx'
// import App from "./App_ref";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
