import React, {useState} from "react";
import Typewriter from "../components/typewriter.jsx";
import LordiconMouse from "./iconmouse.jsx";


function Affichage ({value, onClick}) {

    function handleClick(e){
        e.preventDefault(); {/*pour eviter les defauts de chargement*/}
        onClick(value); {/* on appelle la fonction + nom de compétence*/}
    }

    return (
        <button 
            className="
            nomcomp 
            text-sm sm:text-base md:text-xl {/* text-sm c'est pour le mobile puis sm pour tablette et md pour ordi*/}
            px-2 py-1 
            font-semibold 
            text-[#6546da]
            hover:text-indigo-600
            transition"

        onClick= {handleClick}>{value}</button>
    );
}

function Clavier () {
    const [message, setMessage] = useState(null); {/* etat initial du message sur l'ordi est null*/}



return (


<div className="flex flex-col items-center justify-center w-full px-4 sm:px-6 md:px-10"> {/* flex col pour activer l'empilage en colonne pour la version mobile et les px sm et md c'est pour varier le padding en fonction de la taille de l'écran*/}
      {/* ÉCRAN */}
      <div className="
        ecran 
          bg-[#F7F6F8] 
          border-8 border-[#B68CD1] 
          rounded-lg shadow-md 
          p-6 sm:p-8 
          w-full sm:w-[80%] md:w-[60%] lg:w-[50%] {/* pour la largeur responsive*/}
          h-[250px] sm:h-[300px] md:h-[350px] lg:h-96 {/* pour la hauteur responsive*/}
          flex flex-col items-center justify-start 
          overflow-visible
          mb-8">

        <div className="text-lg sm:text-xl text-center text-[#6546da]">
          <Typewriter 
            text={"\u00A0 Cliquez sur une touche pour découvrir mes compétences !"}
            speed={30}
            />
        </div>

{message && (
          <div className="text-center text-[#6546da] text-sm sm:text-md mt-4 px-4 whitespace-pre-line">
            {message}
          </div>
        )}
      </div>


<div className="w-full flex-col items-center justify-center gap-y-4  sm:gap-y-6">
 <div className="bg-white border-4 border-[#B68CD1] shadow-md p-4 z-10">
   
    <div className="clavier space-y-2">
        <div className="ligneun flex flex-wrap justify-center gap-2 sm:gap-3">
            <div className="bg-white border-2 border-violet-300 rounded px-1 py-1 hover:bg-[#F0E6F7] transition text-3xl text-[#6546da]">
            <Affichage value="GIT-GITHUB" onClick={(value) => 
                setMessage("Versioning avec Git,\n Commits clairs et réguliers,\n Branches et merges,\n Depôts publics sur GitHub,\n Déploiement via GitHub Pages")}/>
                </div>
            <div className=" bg-white border-2 border-violet-300 rounded px-1 py-1 hover:bg-[#F0E6F7] transition text-3xl text-[#6546da]">
            <Affichage value="LINUX"onClick={(value) => 
                setMessage("Utilisation du terminal,\n Scripts bash simples,\n Manipulation de fichiers et permissions,\n Installation de paquets,\n Configuration basique d'environnement de developpement")}/>
                </div>
            <div className=" bg-white border-2 border-violet-300 rounded px-1 py-1 hover:bg-[#F0E6F7] transition text-3xl text-[#6546da]">
            <Affichage value="VISUAL STUDIO CODE" onClick={(value) => 
                setMessage("Utilisation quotidienne,\n Gestion de projets avec terminal intégré et Git")}/> 
                </div>
        </div>
    </div>

        <div className="lignedeux flex flex-wrap justify-center gap-2 sm:gap-3">
            <div className=" bg-white border-2 border-violet-300 rounded px-1 py-1 hover:bg-[#F0E6F7] transition text-3xl text-[#6546da]">
            <Affichage value="JUPYTER NOTEBOOK" onClick={() => 
                setMessage("Prototypage de modèles ML (scikit-learn, pandas),\n Visualisation de données,\n Nettoyage et Exploration interactive,\n Validation croisée et évaluation des performances.")}/>
            </div>
            <div className="bg-white border-2 border-violet-300 rounded px-1 py-1 hover:bg-[#F0E6F7] transition text-3xl text-[#6546da]">
            <Affichage value="PYTHON" onClick={() => 
                setMessage("Niveau : Intermédiaire\n Librairies : Numpy, Pandas, Matplotlib, Scikit-Learn, Beautiful Soup, Pygame, Seaborn\n Frameworks : Streamlit")}/>
            </div>
            <div className=" bg-white border-2 border-violet-300 rounded px-1 py-1 hover:bg-[#F0E6F7] transition  text-3xl text-[#6546da]">
            <Affichage value="HTML"onClick={(value) => 
                setMessage("Structuration de pages web,\n Utilisation des balises sémantiques et éléments de base,\n Intégration de formulaires et médias.")}/>
            </div>
                
        </div>

        <div className="lignetrois flex flex-wrap justify-center gap-2 sm:gap-3">
             <div className=" bg-white border-2 border-violet-300 rounded px-1 py-1  transition w-32 h-16"/>
            <div className=" bg-white border-2 border-violet-300 rounded px-1 py-1 hover:bg-[#F0E6F7] transition text-3xl text-[#6546da]">
            <Affichage value="CSS"onClick={(value) => 
                setMessage("Stylisation de pages web,\n Création de sites web responsives,\n Mise en page avec Flexbox et Grid,\n Framework : MaterializeCSS, TailwindCSS")}/>
            </div>
            <div className=" bg-white border-2 border-violet-300 rounded px-1 py-1 hover:bg-[#F0E6F7] transition text-3xl text-[#6546da]">
            <Affichage value="JAVASCRIPT" onClick={(value) => 
                setMessage("Ajouter de l’interactivité à une page web,\n Gestion des événements utilisateurs et des formulaires,\n Framework : React")}/>
            </div>
            <div className=" bg-white border-2 border-violet-300 rounded px-1 py-1 hover:bg-[#F0E6F7] transition text-3xl text-[#6546da]">
            <Affichage value="JAVA" onClick={(value) => 
                setMessage("Développement de programmes Java simples en console, en appliquant les concepts de base de la programmation orientée objet (POO).")}/>
            </div>
            <div className=" bg-white border-2 border-violet-300 rounded px-1 py-1  transition w-32 h-16"/>
        </div>

            <div className="lignequatre flex flex-wrap justify-center gap-2 sm:gap-3">
            <div className=" bg-white border-2 border-violet-300 rounded px-1 py-1  transition w-16 h-16"/>
            <div className=" bg-white border-2 border-violet-300 rounded px-1 py-1  transition w-16 h-16"/>
            <div className=" bg-white border-2 border-violet-300 rounded px-1 py-1  transition w-16 h-16"/>
            <div className=" bg-white border-2 border-violet-300 rounded px-1 py-1 hover:bg-[#F0E6F7] transition  text-3xl text-[#6546da]">
            <Affichage value="SQL" onClick={(value) => 
                setMessage("Connaissance des bases du langage,\n Manipulation et création de bases de données,\n Création de tables et requêtes de base.")}/>
            </div>
            <div className="bg-white border-2 border-violet-300 rounded px-1 py-1 hover:bg-[#F0E6F7] transition text-3xl text-[#6546da]">
            <Affichage value="PHP" onClick={(value) => 
                setMessage("Connaissance des bases du langage,\n Framework : Laravel")}/>
            </div>
            <div className=" bg-white border-2 border-violet-300 rounded px-1 py-1  transition w-16 h-16"/>
            <div className=" bg-white border-2 border-violet-300 rounded px-1 py-1  transition w-16 h-16"/>
            <div className=" bg-white border-2 border-violet-300 rounded px-1 py-1  transition w-16 h-16"/>
        </div>
    </div>
<div className="w-[150px] sm:w-[200px] md:w-[250px] mt-8">
    <LordiconMouse />
  </div>
</div>
</div>



); 
}

export default Clavier;