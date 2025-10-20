import React from "react";
import { Link } from "react-router-dom";

function Projet() {
  return (
    <div className="bg-purple-100 min-h-screen flex flex-col items-center justify-start py-24 space-y-16">
      {/* Titre */}
      <h1 className="text-7xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500">
        Projets
      </h1>

      {/* Cartes */}
      <div className="flex flex-wrap justify-center gap-10 px-4">
        {/* CARTE 1 */}
        <Link to="/mariobros">
          <div className="w-96 bg-white border-4 border-[#B68CD1] rounded-lg p-4 hover:bg-[#F0E6F7] transition-all duration-300 text-center shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-[#6546da]">Projet Mario Bros</h2>
            <div className="overflow-hidden rounded-lg">
              <img
                src="/gaming.jpg"
                alt="Jeu"
                className="w-full h-64 object-cover transition duration-300 ease-in-out hover:blur-sm border-2 border-violet-300"
              />
            </div>
          </div>
        </Link>

        {/* CARTE 2 */}
        <Link to="/cancersein">
          <div className="w-96 bg-white border-4 border-[#B68CD1] rounded-lg p-4 hover:bg-[#F0E6F7] transition-all duration-300 text-center shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-[#6546da]">Projet cancer du sein</h2>
            <div className="overflow-hidden rounded-lg">
              <img
                src="/health.jpg"
                alt="Health"
                className="w-full h-64 object-cover transition duration-300 ease-in-out hover:blur-sm border-2 border-violet-300"
              />
            </div>
          </div>
        </Link>

        {/* CARTE 3 */}
        <Link to="/jourdepassement">
          <div className="w-96 bg-white border-4 border-[#B68CD1] rounded-lg p-4 hover:bg-[#F0E6F7] transition-all duration-300 text-center shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-[#6546da]">Projet jour du dépassement</h2>
            <div className="overflow-hidden rounded-lg">
              <img
                src="/nature.jpg"
                alt="Nature"
                className="w-full h-64 object-cover transition duration-300 ease-in-out hover:blur-sm border-2 border-violet-300"
              />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Projet;
