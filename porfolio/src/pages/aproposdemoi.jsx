import React from "react";
import Boutonapropos from "../components/boutonapropos";

function Aproposdemoi() {
  return (
    <div className="bg-purple-100 h-screen flex flex-col items-center pt-20">
      <h1 className="text-7xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500 mb-10">
        À propos de moi
      </h1>

      <div className="flex flex-row items-start justify-center gap-10">

        <div className="border-4 border-[#B68CD1] bg-white rounded-md p-6 max-w-lg">
          <Boutonapropos />
        </div>

        <div className="border-4 border-[#B68CD1] bg-white rounded-md p-4">
          <img
            src="/Buketcut.png"
            alt="Buket"
            className="w-80 h-auto rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
export default Aproposdemoi; 
