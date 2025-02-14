import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";
import Footer from "../components/Footer";

// HOME PAGE
const HomePage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [pathname]);
  return (
    <>
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </>
  );
};

export default HomePage;
