import React from "react";
import Button from '@mui/material/Button';
import { ThemeProvider, createMuiTheme } from '@material-ui/core'
import './styles.css';

 
function NavBar() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#FFF2DF', 
      },
    },
  });

  return (
   <div className="contained-body">
   <div className="contained-information-context">
      <div className="information-context">
        <h3>Endomarketing</h3>
        <span>
          Endomarketing está relacionado à aações de treinamento ou qualificação
          dos colaboradores da empresa visando um melhor serviço para o cliente.
          Marketing interno, devido ao nome, é usualmente confudido com
          Endomarketing mesmo sendo conceitos diferentes.
        </span>
        <ThemeProvider theme={theme}>
        <Button variant="contained" color='primary' > DISPENSAR</Button>
        </ThemeProvider>
      </div>




      <div>
        <div className="contained-information-bloc">
          <div className="information-bloc">
          <h3>Quadro de Gestão a Visita</h3>
       

        <div className="contained-demonstrative">
          <div className="demonstrative-name">
            <span>Demonstrativo Comercial</span>
            <div className="icons-demonstrative">
            <img src="/images/glob.svg" alt="0" />
              <img src="/images/grupo.svg" alt="1" />
            </div>
          </div>
          <div className="img-demonstrative">
            <img src="/images/01.png" alt="01" />
            <img src="/images/02.png" alt="02" />
            <img src="/images/03.png" alt="03" />
            <img src="/images/04.png" alt="04" />
          </div>
        </div>

        <div className="contained-demonstrative">
          <div className="demonstrative-name">
            <span>Demonstrativo Comercial</span>
            <div className="icons-demonstrative">
              <img src="/images/glob.svg" alt="0" />
              <img src="/images/grupo.svg" alt="1" />
            </div>
          </div>
          <div className="img-demonstrative">
            <img src="/images/01.png" alt="01" />
            <img src="/images/02.png" alt="02" />
            <img src="/images/03.png" alt="03" />
            <img src="/images/04.png" alt="04" />
          </div>
        </div>

        <div className="contained-demonstrative">
          <div className="demonstrative-name">
            <span>Demonstrativo Comercial</span>
            <div className="icons-demonstrative">
            <img src="/images/glob.svg" alt="0" />
              <img src="/images/grupo.svg" alt="1" />
            </div>
          </div>
          <div className="img-demonstrative">
            <img src="/images/01.png" alt="01" />
            <img src="/images/02.png" alt="02" />
            <img src="/images/03.png" alt="03" />
            <img src="/images/04.png" alt="04" />
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>


  );
}

export default NavBar;
