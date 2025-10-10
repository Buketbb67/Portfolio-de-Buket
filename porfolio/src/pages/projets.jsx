import React from "react";
import { Link } from "react-router-dom";

function Projet(){
    return (
    <>
    <h1>Mes projets</h1>

    <Link to="/mariobros">
        <h2 className="chelsea-market-regular">Projet Mario Bros</h2>
    </Link>
    <Link to="/cancersein">
        <h2 className="chelsea-market-regular">Projet cancer du sein</h2>
    </Link>
    <Link to="/jourdepassement">
        <h2 className="chelsea-market-regular">Projet jour du dépassement</h2>
    </Link>
    </>
);
}

export default Projet;