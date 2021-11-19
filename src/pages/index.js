import React from "react";
import MainColumn from "../components/header/MainColumn";
import NavBar from "../components/navbar/Navbar";

import '../pages/global.css';

function Home() {
  return (
   
   <header className="logo">
      <img src="/images/logo.png" alt="logo" />
   
      <div className="main">
        <MainColumn />

        <NavBar />
        </div>   
        </header>  
  );
}

export default Home;
