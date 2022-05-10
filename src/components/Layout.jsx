import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import SideBar from "./SideBar";

const Layout = ({ children }) => {
  return (
    <div className="relative">
      <Header />
      <SideBar />
      <div className="bg-slate-100 min-h-screen">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
