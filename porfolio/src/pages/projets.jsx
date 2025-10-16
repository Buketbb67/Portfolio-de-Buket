import React from "react";
import { Link } from "react-router-dom";

function Projet(){
    return (
<div className= "bg-purple-100 h-screen flex flex-col items-center justify-start pt-20">
    <h1 className="text-7xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500 mb-10">
        Mes projets
      </h1>

<div className="fixed top-1/2 left-20 transform -translate-y-1/2 w-60 flex flex-col items-start p-6 space-y-6">
    <Link to="/mariobros">
    <div className="w-full bg-white border-2 border-orange-200 rounded px-1 py-1 hover:bg-orange-100 transition">
        <h2>Projet Mario Bros</h2>
    </div>
    </Link>

    <Link to="/cancersein">
    <div className="w-full bg-white border-2 border-orange-200 rounded px-1 py-1 hover:bg-orange-100 transition">
        <h2 className="chelsea-market-regular">Projet cancer du sein</h2>
    </div>
    </Link>

    <Link to="/jourdepassement">
    <div className="w-full bg-white border-2 border-orange-200 rounded px-1 py-1 hover:bg-orange-100 transition">
        <h2 className="chelsea-market-regular">Projet jour du dépassement</h2>
    </div>
    </Link>

</div>
</div>
);
}

export default Projet;