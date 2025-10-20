import React from "react";
import { Link } from "react-router-dom";
import Spline from '@splinetool/react-spline';
import Typewriter from "../components/typewriter.jsx";
import Avatar from "../components/avatar.jsx"; 


function Main(){
  
    return(
<>
     
      <div className= "bg-purple-100 h-screen flex flex-col items-center justify-start pt-20">
       <h1 className="text-7xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500 mb-10">
        Bienvenue sur mon portfolio ! 
      </h1>
      
         <Avatar className="fixed top-1/2 center transform -translate-y-1/2 w-[32rem] p-6"/>
        <div className="fixed top-1/2 right-20 transform -translate-y-1/2 w-[32rem] p-6 font-semibold text-[#6546da]">
          <Typewriter 
          text={" Bonjour ! Je m'appelle Buket, j'ai 26 ans et je suis étudiante en informatique à Epitech Strasbourg. Je suis passionnée par l'intelligence artificielle. Explorez mon univers et découvrez mes projets."}
            speed={30}
            />
        </div>
        
        <div className="fixed top-1/2 left-20 transform -translate-y-1/2 w-60 flex flex-col items-start p-6 space-y-6">
          <Link to="/competencestechniques" className="w-full">
          <div className="w-full bg-white border-4 border-[#B68CD1] rounded px-1 py-1 hover:bg-[#F0E6F7] transition">
            <h2 className="text-xl font-semibold p-6 border-2 border-violet-300 rounded text-center text-[#6546da]">Compétences</h2>
          </div>
          </Link>
        
        
          <Link to="/projets" className="w-full">
          <div className="w-full bg-white border-4 border-[#B68CD1] rounded px-1 py-1 hover:bg-[#F0E6F7] transition">
            <h2 className="text-xl font-semibold p-6 border-2 border-violet-300 rounded text-center text-[#6546da]">Projets</h2>
          </div>
          </Link>
       
        
          <Link to="/aproposdemoi" className="w-full">
          <div className="w-full bg-white border-4 border-[#B68CD1] rounded px-1 py-1 hover:bg-[#F0E6F7] transition">
            <h2 className="text-xl font-semibold p-6 border-2 border-violet-300 rounded text-center text-[#6546da]">À propos de moi</h2>
          </div>
          </Link>
        
      
          <Link to="/contact" className="w-full">
           <div className="w-full bg-white border-4 border-[#B68CD1] rounded px-1 py-1 hover:bg-[#F0E6F7] transition">
             <h2 className="text-xl font-semibold p-6 border-2 border-violet-300 rounded text-center text-[#6546da]">Contact</h2>
          </div>
          </Link>
        </div>
      </div>
   </>
  );
}

export default Main;
