import React from "react";
import { Link } from "react-router-dom";
import Spline from '@splinetool/react-spline';
import Typewriter from "../components/typewriter.jsx";

function Main(){
  
    return(

      <div className= "bg-purple-100 h-screen flex flex-col items-center justify-start pt-20">
      <h1 className="text-7xl text-[#744D8C] font-bold text-center mb-20">
        Bienvenue sur mon portfolio !
      </h1>
      
        
        <div className="fixed top-1/2 right-20 transform -translate-y-1/2 w-[32rem] p-6">
          <Typewriter 
          text={" Bonjour ! Je m'appelle Buket, j'ai 26 ans et je suis étudiante en informatique à Epitech Strasbourg. Je suis passionnée par l'intelligence artificielle. Explorez mon univers et découvrez mes projets."}
            speed={30}
            />
        </div>
        
        <div className="fixed top-1/2 left-20 transform -translate-y-1/2 w-60 flex flex-col items-start p-6 space-y-6">
          <Link to="/competencestechniques" className="w-full">
          <div className="w-full bg-white border-2 border-orange-200 rounded px-1 py-1 hover:bg-orange-100 transition">
            <h2 className="text-xl p-6 border-2 border-violet-300 rounded text-center text-[#451E5B]">Compétences techniques</h2>
          </div>
          </Link>
        
        
          <Link to="/projets" className="w-full">
          <div className="w-full bg-white border-2 border-orange-200 rounded px-1 py-1 hover:bg-orange-100 transition">
            <h2 className="text-xl p-6 border-2 border-violet-300 rounded text-center text-[#451E5B]">Projets</h2>
          </div>
          </Link>
       
        
          <Link to="/aproposdemoi" className="w-full">
          <div className="w-full bg-white border-2 border-orange-200 rounded px-1 py-1 hover:bg-orange-100 transition">
            <h2 className="text-xl p-6 border-2 border-violet-300 rounded text-center text-[#451E5B]">À propos de moi</h2>
          </div>
          </Link>
        
      
          <Link to="/contact" className="w-full">
           <div className="w-full bg-white border-2 border-orange-200 rounded px-1 py-1 hover:bg-orange-100 transition">
             <h2 className="text-xl p-6 border-2 border-violet-300 rounded text-center text-[#451E5B]">Contact</h2>
          </div>
          </Link>
        </div>
      </div>
   
  );
}

export default Main;
