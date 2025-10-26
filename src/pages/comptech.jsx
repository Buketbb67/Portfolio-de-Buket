import React from "react";
import Clavier from "../components/clavier.jsx";
import Typewriter from "../components/typewriter.jsx";

function Competencestechniques() {
  return (
    <div className="bg-purple-100 min-h-screen flex flex-col items-center justify-start pt-20 px-4">
      <h1
        className="
          text-5xl               /* taille mobile */
          sm:text-6xl            /* taille tablette */
          lg:text-7xl            /* taille ordi */
          font-bold
          text-center
          text-transparent
          bg-clip-text
          bg-gradient-to-r
          from-indigo-600
          to-pink-500
          mb-10
        "
      >
        Compétences techniques
      </h1>

      <div className="w-full max-w-6xl flex justify-center px-2 sm:px-4">
        <Clavier />
      </div>
    </div>
  );
}

export default Competencestechniques;

