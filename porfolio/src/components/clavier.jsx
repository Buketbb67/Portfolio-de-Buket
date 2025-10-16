import React, {useState} from "react";
import Typewriter from "../components/typewriter.jsx";
import LordiconMouse from "./iconmouse.jsx";


function Affichage ({value, onClick}) {

    function handleClick(e){
        e.preventDefault(); {/*pour eviter les defauts de chargement*/}
        onClick(value); {/* on appelle la fonction + nom de compétence*/}
    }

    return (
        <button className="nomcomp" 
        onClick= {handleClick}>{value}</button>
    );
}

function Clavier () {
    const [message, setMessage] = useState(null); {/* etat initial du message sur l'ordi est null*/}



return (
<>

<div className ="ecran bg-[#F7F6F8] border-8 border-black rounded-lg shadow-md p-8 w-[50%] h-96 flex flex-col items-center justify-start overflow-auto">
        <div className="text-xl text-center">
          <Typewriter 
            text={" Cliquez sur une touche pour découvrir mes compétences !"}
            speed={30}
            />
        </div>

{message && (
          <div className="text-center text-md mt-4 px-4 whitespace-pre-line">
            {message}
          </div>
        )}
      </div>

<div className="w-full flex justify-center items-end gap-x-6 mt-10 relative">
 <div className="bg-white border-2 border-black shadow-md p-4 z-10">
   
    <div className="clavier space-y-2">
        <div className="ligneun flex space-x-2">
            <div className="bg-white border-2 border-orange-200 rounded px-1 py-1 hover:bg-orange-100 transition text-center text-3xl">
            <Affichage value="GIT-GITHUB" onClick={(value) => 
                setMessage("Versioning avec Git, Commits clairs et réguliers, Branches et merges, Dépôts publics sur GitHub , Déploiement via GitHub Pages")}/>
                </div>
            <div className=" bg-white border-2 border-orange-200 rounded px-1 py-1 hover:bg-orange-100 transition text-center text-3xl">
            <Affichage value="LINUX"onClick={(value) => 
                setMessage("Utilisation du terminal, scripts bash simples, manipulation de fichiers et permissions, installation de paquets, configuration basique d'environnement de dev")}/>
                </div>
            <div className=" bg-white border-2 border-orange-200 rounded px-1 py-1 hover:bg-orange-100 transition text-center text-3xl">
            <Affichage value="VISUAL STUDIO CODE" onClick={(value) => 
                setMessage("Utilisation quotidienne, gestion de projets avec terminal intégré et Git")}/> 
                </div>
        </div>
    </div>

        <div className="lignedeux flex space-x-2">
            <div className=" bg-white border-2 border-orange-200 rounded px-1 py-1 hover:bg-orange-100 transition text-center text-3xl">
            <Affichage value="JUPYTER NOTEBOOK" onClick={() => 
                setMessage("Prototypage de modèles ML (scikit-learn, pandas), visualisation de données, nettoyage et exploration interactive, validation croisée et évaluation des performances.")}/>
            </div>
            <div className="bg-white border-2 border-orange-200 rounded px-1 py-1 hover:bg-orange-100 transition text-center text-3xl">
            <Affichage value="PYTHON" onClick={() => 
                setMessage("Niveau : Intermédiaire\nLibrairies : Numpy, Pandas, Matplotlib, Scikit-Learn, Beautiful Soup, Pygame, Seaborn\nFrameworks : Streamlit")}/>
            </div>
            <div className=" bg-white border-2 border-orange-200 rounded px-1 py-1 hover:bg-orange-100 transition text-center text-3xl">
            <Affichage value="HTML"onClick={(value) => 
                setMessage("Completer le doc ")}/>
            </div>
                
        </div>

        <div className="lignetrois flex space-x-2">
             <div className=" bg-white border-2 border-orange-200 rounded px-1 py-1  transition w-32 h-16"/>
            <div className=" bg-white border-2 border-orange-200 rounded px-1 py-1 hover:bg-orange-100 transition text-center text-3xl">
            <Affichage value="CSS"onClick={(value) => 
                setMessage("Framework : MaterializeCSS, TailwindCSS")}/>
            </div>
            <div className=" bg-white border-2 border-orange-200 rounded px-1 py-1 hover:bg-orange-100 transition text-center text-3xl">
            <Affichage value="JAVASCRIPT" onClick={(value) => 
                setMessage("React")}/>
            </div>
            <div className=" bg-white border-2 border-orange-200 rounded px-1 py-1 hover:bg-orange-100 transition text-center text-3xl">
            <Affichage value="JAVA" onClick={(value) => 
                setMessage("En cours d'apprentissage")}/>
            </div>
            <div className=" bg-white border-2 border-orange-200 rounded px-1 py-1  transition w-32 h-16"/>
        </div>

            <div className="lignequatre flex space-x-2">
            <div className=" bg-white border-2 border-orange-200 rounded px-1 py-1  transition w-16 h-16"/>
            <div className=" bg-white border-2 border-orange-200 rounded px-1 py-1  transition w-16 h-16"/>
            <div className=" bg-white border-2 border-orange-200 rounded px-1 py-1  transition w-16 h-16"/>
            <div className=" bg-white border-2 border-orange-200 rounded px-1 py-1 hover:bg-orange-100 transition text-center text-3xl">
            <Affichage value="SQL" onClick={(value) => 
                setMessage("My SQL et tout le blabla")}/>
            </div>
            <div className="bg-white border-2 border-orange-200 rounded px-1 py-1 hover:bg-orange-100 transition text-center text-3xl">
            <Affichage value="PHP" onClick={(value) => 
                setMessage("J'ai découvert Laravel et j'aime pas.")}/>
            </div>
            <div className=" bg-white border-2 border-orange-200 rounded px-1 py-1  transition w-16 h-16"/>
            <div className=" bg-white border-2 border-orange-200 rounded px-1 py-1  transition w-16 h-16"/>
            <div className=" bg-white border-2 border-orange-200 rounded px-1 py-1  transition w-16 h-16"/>
        </div>
    </div>
<div className="w-[250px] h-[250px]">
    <LordiconMouse />
  </div>
</div>

</>

); 
}

export default Clavier;