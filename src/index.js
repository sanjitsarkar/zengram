import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { store } from "./app/store";
import { ScrollToTop } from "./components/ScrollToTop";
import {
  DropDownProvider,
  ModalProvider,
  SearchProvider,
  SideBarItemProvider,
} from "./context";
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
            <DropDownProvider>
              <App />
            </DropDownProvider>
          </SearchProvider>
        </SideBarItemProvider>
      </ModalProvider>
    </Provider>
  </BrowserRouter>
);
