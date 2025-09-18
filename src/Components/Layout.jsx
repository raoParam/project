// Layout.js
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();
  const hideFooter = location.pathname === "/chat";

  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        {children}
      </main>
      {!hideFooter && <Footer />} 
    </div>
  );
};

export default Layout;