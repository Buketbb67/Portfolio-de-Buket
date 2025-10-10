import React from "react";
import { Link } from "react-router-dom";

function Main(){

    return(
<>
      <h1 className="chelsea-market-regular">Bienvenue sur mon portfolio !</h1>
      <div className="wrapper">
        <div className="one">
          <p className="sawarabi-gothic-regular">
            Je m'appelle Buket, j'ai 26 ans et <br />
            je suis étudiante en informatique à Epitech Strasbourg.<br />
            Je suis passionnée par l'intelligence artificielle et les données.<br />
            Entre 3D et expériences visuelles, explorez mon univers.
          </p>
        </div>
        <div className="two">
          <Link to="/competencestechniques">
            <h2 className="chelsea-market-regular">Compétences techniques</h2>
          </Link>
        </div>
        <div className="three">
          <Link to="/projets">
            <h2 className="chelsea-market-regular">Projets</h2>
          </Link>
        </div>
        <div className="four">
          <Link to="/aproposdemoi">
            <h2 className="chelsea-market-regular">À propos de moi</h2>
          </Link>
        </div>
        <div className="five">
           <Link to="/contact">
            <h2 className="chelsea-market-regular">Contact</h2>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Main;