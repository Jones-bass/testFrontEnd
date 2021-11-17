import React from "react";

function NavBar() {
  return (
    <div className="navbar">
      <div className="nav1">
        <h3>Endomarketing</h3>

        <span>
          Endomarketing está relacionado à aações de treinamento ou qualificação
          dos colaboradores da empresa visando um melhor serviço para o cliente.
          Marketing interno, devido ao nome, é usualmente confudido com
          Endomarketing mesmo sendo conceitos diferentes.
        </span>
        <button>Dispensar</button>
      </div>

      <div>
        <div className="nav2">
          <h3>Quadro de Gestão a Visita</h3>
        </div>

        <div className="toolba-contained">
          <div className="toolbar-nav">
            <span>Demonstrativo Comercial</span>
            <div className="icons">
              <img src="/images/glob.png" alt="0" />
              <img src="/images/icon1.png" alt="1" />
            </div>
          </div>
          <div className="toolbar-img">
            <img src="/images/01.png" alt="01" />
            <img src="/images/02.png" alt="02" />
            <img src="/images/03.png" alt="03" />
            <img src="/images/04.png" alt="04" />
          </div>
        </div>

        <div className="toolba-contained">
          <div className="toolbar-nav">
            <span>Demonstrativo Comercial</span>
            <div className="icons">
              <img src="/images/glob.png" alt="0" />
              <img src="/images/icon1.png" alt="1" />
            </div>
          </div>
          <div className="toolbar-img">
            <img src="/images/01.png" alt="01" />
            <img src="/images/02.png" alt="02" />
            <img src="/images/03.png" alt="03" />
            <img src="/images/04.png" alt="04" />
          </div>
        </div>

        <div className="toolba-contained">
          <div className="toolbar-nav">
            <span>Demonstrativo Comercial</span>
            <div className="icons">
              <img src="/images/glob.png" alt="0" />
              <img src="/images/icon1.png" alt="1" />
            </div>
          </div>
          <div className="toolbar-img">
            <img src="/images/01.png" alt="01" />
            <img src="/images/02.png" alt="02" />
            <img src="/images/03.png" alt="03" />
            <img src="/images/04.png" alt="04" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
