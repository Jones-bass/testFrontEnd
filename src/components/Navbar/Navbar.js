import React from "react";
import Button from "@mui/material/Button";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import "./styles.css";
import Post from "../Post/Post";
import New from "../New/New";

function NavBar() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#FFF2DF",
      },
    },
  });

  return (
    <div className="contained-body">
      <div className="contained-information-context">
        <div className="information-context">
          <h3>Endomarketing</h3>
          <span>
            Endomarketing está relacionado à aações de treinamento ou
            qualificação dos colaboradores da empresa visando um melhor serviço
            para o cliente. Marketing interno, devido ao nome, é usualmente
            confudido com Endomarketing mesmo sendo conceitos diferentes.
          </span>
          <ThemeProvider theme={theme}>
            <Button variant="contained" color="primary">
              {" "}
              DISPENSAR
            </Button>
          </ThemeProvider>
        </div>
        <New />
      </div>
    </div>
  );
}

export default NavBar;
