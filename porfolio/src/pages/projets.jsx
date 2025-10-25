import React from "react";
import { Link } from "react-router-dom";

function Projet() {
  return (
    <div className="bg-purple-100 min-h-screen flex flex-col items-center justify-start py-16 sm:py-20 md:py-24 space-y-12 sm:space-y-16 px-4">
      {/* Titre */}
      <h1 className="
        text-4xl 
        sm:text-5xl
        md: texte-6xl
        lg:texte-7xl
        font-bold 
        text-center 
        text-transparent 
        bg-clip-text 
        bg-gradient-to-r from-indigo-600 to-pink-500">
        Projets
      </h1>

      {/* Cartes */}
      <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 w-full max-w-7xl">
        {/* CARTE 1 */}
        <Link to="/mariobros" className="flex-1 min-w-[250px] sm:min-w-[300px] md:min-w-[350px] max-w-[380px]"> {/* cela dit à la carte de prendre toute la place dispo*/}
          <div className="bg-white
            border-4 border-[#B68CD1]
            rounded-lg
            p-4
            hover:bg-[#F0E6F7]
            transition-all duration-300
            text-center
            shadow-md">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-[#6546da]">Projet Mario Bros</h2>
            <div className="overflow-hidden rounded-lg">
              <img
                src="/gaming.jpg"
                alt="Jeu"
                className="w-full h-48 sm:h-56 md:h-64 object-cover transition duration-300 ease-in-out hover:blur-sm border-2 border-violet-300"
              />
            </div>
          </div>
        </Link>

        {/* CARTE 2 */}
        <Link to="/cancersein" className="flex-1 min-w-[250px] sm:min-w-[300px] md:min-w-[350px] max-w-[380px]">
          <div className="bg-white
            border-4 border-[#B68CD1]
            rounded-lg
            p-4
            hover:bg-[#F0E6F7]
            transition-all duration-300
            text-center
            shadow-md">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-[#6546da]">Projet cancer du sein</h2>
            <div className="overflow-hidden rounded-lg">
              <img
                src="/health.jpg"
                alt="Health"
                className="w-full h-48 sm:h-56 md:h-64 object-cover transition duration-300 ease-in-out hover:blur-sm border-2 border-violet-300"
              />
            </div>
          </div>
        </Link>

        {/* CARTE 3 */}
        <Link to="/jourdepassement" className="flex-1 min-w-[250px] sm:min-w-[300px] md:min-w-[350px] max-w-[380px]">
          <div className="
            bg-white
            border-4 border-[#B68CD1]
            rounded-lg
            p-4
            hover:bg-[#F0E6F7]
            transition-all duration-300
            text-center
            shadow-md
          ">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-[#6546da]">Projet jour du dépassement</h2>
            <div className="overflow-hidden rounded-lg">
              <img
                src="/nature.jpg"
                alt="Nature"
                className="w-full h-48 sm:h-56 md:h-64 object-cover transition duration-300 ease-in-out hover:blur-sm border-2 border-violet-300"
              />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Projet;
