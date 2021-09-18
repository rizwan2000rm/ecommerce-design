import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="layout">
        <Navbar />
        <Hero />
      </div>
      <RightSidebar />
    </div>
  );
};

export default Home;
