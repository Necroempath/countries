import React from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import { CountriesProvider } from "../context/CountriesContext";

const SiteLayout = () => {
  return (
    <CountriesProvider>
      <Header />
      <main className='container'>
        <Outlet />
      </main>
      <Footer />
    </CountriesProvider>
  );
};

export default SiteLayout;
