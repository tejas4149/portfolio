import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";
// import { useEffect } from "react";

// useEffect(() => {
//   AOS.init({ duration: 1000 });
// }, []);


createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
