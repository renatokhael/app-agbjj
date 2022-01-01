import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logoImg from "../../assets/images/logo.svg";
import landingImg from "../../assets/images/file.png";

import studyIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";

import api from "../../services/api";

import "./styles.css";

function Landing() {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get("connections").then((response) => {
      const { total } = response.data;

      setTotalConnections(total);
    });
  }, []);

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="AG Jiu-Jitsu" width={200} />
          <h2>Agora você não tem mais desculpas para treinar.</h2>
        </div>

        <img
          src={landingImg}
          alt="Plataforma de estudos"
          className="hero-image"
        />

        <div className="buttons-container">
          <Link to="/study" className="study">
            Marcar aula
          </Link>

          <Link to="/give-classes" className="give-classes">
            Dar aulas
          </Link>
        </div>

        <span className="total-connections">
          Total de {totalConnections} aulas já realizadas{" "}
        </span>
      </div>
    </div>
  );
}

export default Landing;
