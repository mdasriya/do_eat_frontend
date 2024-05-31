import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HelmetProvider } from 'react-helmet-async';
import StorecontextProvider from "./context/StoreContext.jsx";
import { HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
  <HashRouter>
  <StorecontextProvider>
    <App />
  </StorecontextProvider>
</HashRouter>
</HelmetProvider>
  
);
