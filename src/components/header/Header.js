import React from "react";
import ButtonAdd from "../Button/ButtonAdd";

import "./styles.css";

function Header() {
  return (
    <div className="contained-feed">
      <header>
        <div className="contained-endomarketing">
          <div>
            <img className="endomarketing-logo" src="/images/endo.svg" alt="01" />
          </div>
          <div className="button-endomarketing">
            <ButtonAdd />
          </div>
        </div>

        <div className="contained-column">
          <img src="/images/img1.png" alt="01" />
          <div>
            <h2>Geral dispensado para curtir o feriado</h2>
            <p>
              <span className="span-border">COMUNICADO </span> 13 de OUT
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo
              eiusmod tempor incididunt...
            </p>
          </div>
          <div className="column-icon">
            <img src="/images/icon1.svg" alt="01" />
          </div>
        </div>

        <div className="contained-column">
          <img src="/images/img2.png" alt="02" />
          <div>
            <h2>Geral dispensado para curtir o feriado</h2>
            <p>
              <span className="span-border">COMUNICADO </span> 13 de OUT
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo
              eiusmod tempor incididunt...
            </p>
          </div>
          <div className="column-icon">
            <img src="/images/icon1.svg" alt="01" />
          </div>
        </div>

        <div className="contained-column">
          <img src="/images/img3.png" alt="03" />
          <div>
            <h2>Geral dispensado para curtir o feriado</h2>
            <p>
              <span className="span-border">COMUNICADO </span> 13 de OUT
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo
              eiusmod tempor incididunt...
            </p>
          </div>
          <div className="column-icon">
            <img src="/images/icon1.svg" alt="01" />
          </div>
        </div>

        <div className="contained-column">
          <img src="/images/img4.png" alt="04" />
          <div>
            <h2>Geral dispensado para curtir o feriado</h2>
            <p>
              <span className="span-border">COMUNICADO </span> 13 de OUT
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo
              eiusmod tempor incididunt...
            </p>
          </div>
          <div className="column-icon">
            <img src="/images/icon1.svg" alt="01" />
          </div>
        </div>

        <div className="contained-column">
          <img src="/images/img5.png" alt="05" />
          <div>
            <h2>Geral dispensado para curtir o feriado</h2>
            <p>
              <span className="span-border">COMUNICADO </span> 13 de OUT
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo
              eiusmod tempor incididunt...
            </p>
          </div>
          <div className="column-icon">
            <img src="/images/icon1.svg" alt="01" />
          </div>
        </div>

        <div className="contained-column">
          <img src="/images/img6.png" alt="06" />
          <div>
            <h2>Geral dispensado para curtir o feriado</h2>
            <p>
              <span className="span-border">COMUNICADO </span> 13 de OUT
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo
              eiusmod tempor incididunt...
            </p>
          </div>
          <div className="column-icon">
            <img src="/images/icon1.svg" alt="01" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
