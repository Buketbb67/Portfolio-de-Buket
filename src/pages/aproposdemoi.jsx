import React from "react";
import Boutonapropos from "../components/boutonapropos";

function Aproposdemoi() {
  return (
    <div className="bg-purple-100 min-h-screen flex flex-col items-center px-4 sm:px-8 md:px-10 py-16 sm:py-20">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500 mb-10 sm:mb-16">
        À propos de moi
      </h1>

      {/* 2 blocs */}
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-6 sm:gap-8 md:gap-12 w-full max-w-screen-xl">
        
        {/* Bloc gauche */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="border-4 border-[#B68CD1] bg-white rounded-md p-4 sm:p-6 shadow-md w-full max-w-lg min-h-[400px]">
            <div className="mt-5 h-full">
              <Boutonapropos />
            </div>
          </div>
        </div>

        {/* Bloc droit */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="border-4 border-[#B68CD1] bg-white rounded-md p-4 sm:p-6 shadow-md flex flex-col items-center w-full max-w-md min-h-[400px]">
            <p className="text-center text-[#6546da] mb-4 text-base sm:text-lg">
              Cliquez sur le CV pour le télécharger
            </p>
            <a href="/CV.pdf" download>
              <img
                src="/captureCV.png"
                alt="CV"
                className="w-full h-auto max-w-[300px] object-contain hover:opacity-80 transition"
              />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Aproposdemoi;

