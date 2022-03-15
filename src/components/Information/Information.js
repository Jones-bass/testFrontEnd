import React from "react";
import Demostrativo from "./Demostrativo";
import "./styles.css";

const Information = () => {
  return (
    <div>
      <div className="contained-information-bloc">
        <div className="information-bloc">
          <h1>Quadro de Gestão a Visita</h1>
          <Demostrativo/>
          <Demostrativo/>
          <Demostrativo/>
        </div>
      </div>
    </div>
  );
}
export default Information;



