import React from "react";
import ButtonAdd from "../Button/ButtonAdd";
import Post from "../Post/Post";

import "./styles.css";

function Header() {
  return (
    <div className="contained-feed">
      <header>
        <div className="contained-endomarketing">
          <div>
            <img
              className="endomarketing-logo"
              src="/images/endo.svg"
              alt="01"
            />
          </div>
          <div className="button-endomarketing">
            <ButtonAdd />
          </div>
        </div>

        <Post />
      </header>
    </div>
  );
}

export default Header;
