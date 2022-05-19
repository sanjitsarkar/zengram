import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { store } from "./app/store";
import { ScrollToTop } from "./components/ScrollToTop";
import { ModalProvider } from "./context/modalContext";
import { SearchProvider } from "./context/searchContext";
import { SideBarItemProvider } from "./context/sideBarItemContext";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <ScrollToTop />
    <Provider store={store}>
      <ModalProvider>
        <SideBarItemProvider>
          <SearchProvider>
            <App />
          </SearchProvider>
        </SideBarItemProvider>
      </ModalProvider>
    </Provider>
  </BrowserRouter>
);
