import React from "react";
import ReactPlayer from "react-player"; 

function Mario() {
  return (
    <div className="bg-purple-100 min-h-screen flex flex-col items-center pt-20 px-10 pb-20">
      {/* Titre */}
      <h1 className="text-7xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500 mb-16">
        Jeu Mario Bros
      </h1>

      {/* Contenu en deux colonnes */}
      <div className="flex flex-row justify-center items-start gap-10 w-full max-w-screen-xl">
        
        {/* Bloc image - 3/5 */}
        <div className="w-3/5 self-start">
          <div className="border-4 border-[#B68CD1] bg-white rounded-md p-6 w-full flex flex-col items-center">
            <ReactPlayer 
            url="/mariodemodeux.mp4"
            controls
            width="100%"
            height="100%"
            />

          </div>
        </div>

        {/* Bloc texte - 2/5 */}
        <div className="w-2/5">
          <div className="border-4 border-[#B68CD1] bg-white rounded-md p-6 h-full">
            <p className="text-justify text-[#6546da] leading-relaxed">
              Je voulais jouer à Super Mario Bros Wonder mais sans la Switch 2 alors j'ai décidé de coder mon propre prototype en Python. 
              Inspiré de Mario, le jeu est un platformer 2D où le personnage se déplace avec les flèches et lance des boules de feu avec la touche Z pour éliminer les ennemis.
              <br /><br />
              Si Mario se fait toucher deux fois, la partie est terminée. J'ai utilisé Pygame pour la logique et Canva pour les décors.
              Ce projet était un véritable défi pour moi en tant que débutante, surtout pour déboguer le code et pour gérer la gravité lorsque Mario saute.
              <br /><br />
              Le jeu est loin d'être terminé : j'envisage d'ajouter d'autres versions de Mario, des ennemis variés, des mondes dynamiques et un mode multijoueur.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Mario;
