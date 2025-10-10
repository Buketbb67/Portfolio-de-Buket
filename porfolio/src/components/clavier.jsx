import React, {useState} from "react";

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
<div ClassName ="ecran">
    <p>{message}</p>
</div>
<div className= "clavier">
        <div className="ligneun">
            <Affichage value="GIT-GITHUB" onClick={(value) => 
                setMessage("Versioning avec Git, Commits clairs et réguliers, Branches et merges, Dépôts publics sur GitHub , Déploiement via GitHub Pages")}/>
            <Affichage value="LINUX"onClick={(value) => 
                setMessage("Utilisation du terminal, scripts bash simples, manipulation de fichiers et permissions, installation de paquets, configuration basique d'environnement de dev")}/>
            <Affichage value="VISUAL STUDIO CODE" onClick={(value) => 
                setMessage("Utilisation quotidienne, gestion de projets avec terminal intégré et Git")}/> 
        </div>
        <div className="lignedeux">
            <Affichage value="JUPYTER NOTEBOOK" onClick={(value) => 
                setMessage("Prototypage de modèles ML (scikit-learn, pandas), visualisation de données, nettoyage et exploration interactive, validation croisée et évaluation des performances.")}/>
            <Affichage value="PYTHON" onClick={(value) => 
                setMessage("Niveau : Intermédiaire Librairies : Numpy, Pandas, Matplotlib, Scikit-Learn, Beautiful Soup, Pygame, Seaborn Frameworks : Streamlit")}/>
            <Affichage value="HTML"onClick={(value) => 
                setMessage("Completer le doc ")}/>
                
        </div>
        <div className="lignetrois">
            <Affichage value="CSS"onClick={(value) => 
                setMessage("Framework : Materialize")}/>
            <Affichage value="JAVASCRIPT" onClick={(value) => 
                setMessage("C'est difficile mais j'essaye d'utiliser React")}/>
            <Affichage value="JAVA" onClick={(value) => 
                setMessage("Je vais apprendre le Java dans quelques semaines")}/>
        </div>
            <div className="lignequatre">
            <Affichage value="SQL" onClick={(value) => 
                setMessage("My SQL et tout le blabla")}/>
            <Affichage value="PHP" onClick={(value) => 
                setMessage("J'ai découvert Laravel et j'aime pas.")}/>
        </div>
</div>
</>

); 
}
export default Clavier;