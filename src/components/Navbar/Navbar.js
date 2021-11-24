import React from "react";
import Button from "@mui/material/Button";
import ContainedBlock from "../ContainedBlock/ContainedBlock";

import { ThemeProvider, createTheme } from "@material-ui/core";
import "./styles.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFF2DF",
    },
  },
});

function NavBar() {
  return (
  
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
        <ContainedBlock />
      </div>
  );
}

export default NavBar;
