import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { store } from "./app/store";
import { SideBarItemProvider } from "./context/sideBarItemContext";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <SideBarItemProvider>
        <App />
      </SideBarItemProvider>
    </Provider>
  </BrowserRouter>
);