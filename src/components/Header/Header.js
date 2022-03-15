import React from "react";
import ButtonAdd from "../Button/ButtonAdd";
import PostApi from "../PostAPI/PostApi";
import "./styles.css";

const Header = () => {
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

        <PostApi />
      </header>
    </div>
  );
}

export default Header;
