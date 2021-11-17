import React from "react";
import Header from "./components/Header";
import NavBar from "./components/Navbar";
import "./style.css";

function Home() {
  return (
   
   <div className="logo">
      <img src="/images/logo.png" alt="logo" />
   
      <div className="main">
        <Header />
        <NavBar />
        </div>   
        </div>  
  );
}

export default Home;
