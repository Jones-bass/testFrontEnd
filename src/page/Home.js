import React from "react";
import Header from "../Components/Header/Header";
import NavBar from "../Components/Navbar/Navbar";
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
