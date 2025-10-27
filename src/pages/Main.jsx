import React from "react";
import { Link } from "react-router-dom";
import Typewriter from "../components/typewriter.jsx";
import Avatar from "../components/avatar.jsx";

function Main() {
  return (
    <div className="bg-purple-100 min-h-screen flex flex-col items-center justify-start pt-20 px-4">
      {/* Titre */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500 mb-10">
        Bienvenue sur mon portfolio !
      </h1>

      {/* Contenu principal */}
      <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-10 lg:gap-20">
        
        {/* Liens (gauche en grand écran, en haut sur mobile) */}
        <div className="flex flex-col items-center lg:items-start space-y-4 w-full max-w-xs">
          {[
            { to: "/competencestechniques", label: "Compétences" },
            { to: "/projets", label: "Projets" },
            { to: "/aproposdemoi", label: "À propos de moi" },
            { to: "/contact", label: "Contact" },
          ].map((link) => (
            <Link key={link.to} to={link.to} className="w-full">
              <div className="w-full bg-white border-4 border-[#B68CD1] rounded px-1 py-1 hover:bg-[#F0E6F7] transition">
                <h2 className="text-lg sm:text-xl font-semibold p-4 sm:p-6 border-2 border-violet-300 rounded text-center text-[#6546da]">
                  {link.label}
                </h2>
              </div>
            </Link>
          ))}
        </div>

        {/* Avatar */}
        <div className="flex justify-center w-full lg:w-auto">
          <Avatar className="mx-auto" />
        </div>


        {/* Texte avec machine à écrire */}
        <div className="w-full lg:w-[32rem] bg-white border-4 border-[#B68CD1] p-6 font-semibold text-[#6546da] rounded shadow-md overflow-visible">
          <Typewriter
            text={
              "Bonjour ! Je m'appelle Buket, j'ai 26 ans et je suis étudiante en informatique à Epitech Strasbourg. Je suis passionnée par l'intelligence artificielle et les données. Explorez mon univers et découvrez mes projets."
            }
            speed={30}
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
