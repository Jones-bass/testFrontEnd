import React from "react";
import { Button } from "@material-ui/core";

function Header() {
  return (
    <div className="feed">

    <header>
    <div className="toolbar">
      <div>
        <span>Endomarketing</span>
      </div>
      <div className="button">
        <Button variant="contained" color="secundary">
          TIPO
        </Button>
        <Button variant="contained" color="primary">
          Criar
        </Button>
      </div>
    </div>

    <div className="coluna">
      <h2>Geral dispensado para curtir o feriado</h2>
      <span>
        COMUNICADO <p>13 de OUT </p>
      </span>
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt...
      </span>
    </div>
  </header>
  </div>
  );
}

export default Header;
