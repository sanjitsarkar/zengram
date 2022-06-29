import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { store } from "./app/store";
import { ScrollToTop } from "./components/ScrollToTop";
import {
  ModalProvider,
  OnlineUsersProvider,
  SearchProvider,
  SideBarItemProvider,
  SocketProvider,
} from "./context";
import { VideoSteamingContextProvider } from "./context/videoSteamingContext";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <ScrollToTop />
    <Provider store={store}>
      <SocketProvider>
        <VideoSteamingContextProvider>
          <OnlineUsersProvider>
            <ModalProvider>
              <SideBarItemProvider>
                <SearchProvider>
                  <App />
                </SearchProvider>
              </SideBarItemProvider>
            </ModalProvider>
          </OnlineUsersProvider>
        </VideoSteamingContextProvider>
      </SocketProvider>
    </Provider>
  </BrowserRouter>
);
