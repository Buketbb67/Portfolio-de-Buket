import React from "react";
import Boutonapropos from "../components/boutonapropos";

function Aproposdemoi() {
  return (
    <div className="bg-purple-100 min-h-screen flex flex-col items-center px-10 py-20">
      {/* Titre */}
      <h1 className="text-7xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500 mb-16">
        À propos de moi
      </h1>

      {/* Contenu en 2 blocs côte à côte */}
      <div className="flex flex-row justify-center items-start gap-12 w-full max-w-screen-xl">

        {/* Bloc gauche – Texte  */}
        <div className="w-[48%]">
          <div className="border-4 border-[#B68CD1] bg-white rounded-md p-6 shadow-md h-[500px] w-[700px]">
            <div className="mt-5">
              <Boutonapropos />
            </div>
          </div>
        </div>

        {/* Bloc droit */}
        <div className="w-[48%] flex justify-center">
          <div className="border-4 border-[#B68CD1] bg-white rounded-md p-6 shadow-md flex flex-col items-center h-[700px] w-[500px]">
            <p className="text-center text-[#6546da] mb-4">Cliquez sur le CV pour le télécharger</p>
            <a href="/CV.pdf" download>
              <img
                src="/captureCV.png"
                alt="CV"
                className="w-48 h-auto hover:opacity-80 transition"
              />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Aproposdemoi;
