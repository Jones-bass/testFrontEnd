import React from "react";
import Header from "../components/header/Header";
import NavBar from "../components/navbar/Navbar";

import '../pages/global.css';

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
