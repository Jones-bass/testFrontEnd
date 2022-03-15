import React from "react";
import Header from "../components/Header/Header";
import NavBar from "../components/Navbar/Navbar";
import "./global.css";

const Home = () => {
  return (
    <header className="logo">
      <img src="/images/logo.png" alt="logo" />

      <div className="main">
        <Header />
        <NavBar />
      </div>
    </header>
  );
}

export default Home;
