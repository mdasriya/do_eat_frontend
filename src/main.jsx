import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import StorecontextProvider from "./context/StoreContext.jsx";
import { HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
  <StorecontextProvider>
    <App />
  </StorecontextProvider>
</HashRouter>
  
);
