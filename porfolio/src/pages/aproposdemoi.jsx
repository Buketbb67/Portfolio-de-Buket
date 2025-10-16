import React from "react";
import Boutonapropos from "../components/boutonapropos";

function Aproposdemoi() {
  return (
    <div className="bg-purple-100 h-screen flex flex-col items-center pt-20 gap-10 px-10">
      <h1 className="text-7xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500 mb-10">
        À propos de moi
      </h1>

      <div className="flex flex-row items-start justify-center gap-10">
        
        <div className="w-1/3 h-96 justify-center" /> {/* pour y mettre l'avatar*/}
        
        <div className="w-1/3 h-96 justify-center">
        <div className="border-4 border-[#B68CD1] bg-white rounded-md p-6 h-full">
          <Boutonapropos />
        </div>
        </div>

        <div className="w-1/3 flex justify-center">
  <div className="border-4 border-[#B68CD1] bg-white rounded-md p-6 h-full flex flex-col items-center">
    <img
      src="/Buketcut.png"
      alt="Buket"
      className="w-fit h-auto mb-4"
    />
    <p className="text-center mb-4">Cliquez sur le CV pour le télécharger :</p>
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
