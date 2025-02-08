import React from "react";
import Header from "../components.tsx/header";
import Testimonial from "../components.tsx/testimonial";
import Footer from "../components.tsx/footer";
import LandingPage from "../components.tsx/LandingPage";
import About from "../components.tsx/About";
import Explore from "../components.tsx/Explore";

const Landing = () => {
  return (
    <div className="">
      <Header />
      <LandingPage />
      <About />
      <Testimonial />
      <Explore />
      <Footer />
    </div>
  );
};

export default Landing;
