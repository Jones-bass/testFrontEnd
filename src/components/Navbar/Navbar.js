import React from "react";
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@material-ui/core";
import Information from "../Information/Information";
import "./styles.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFF2DF",
    },
  },
});

const NavBar = () => {
  return (
    <div className="contained-body">
      <div className="contained-information-context">
        <div className="information-context">
          <h3>Endomarketing</h3>
          <span className="span-context">
            Endomarketing está relacionado à aações de treinamento ou
            qualificação dos colaboradores da empresa visando um melhor serviço
            para o cliente. Marketing interno, devido ao nome, é usualmente
            confudido com Endomarketing mesmo sendo conceitos diferentes.
          </span>
          <ThemeProvider theme={theme}>
            <Button variant="contained" color="primary">
              DISPENSAR
            </Button>
          </ThemeProvider>
        </div>
        <Information />
      </div>
    </div>
  );
}

export default NavBar;
