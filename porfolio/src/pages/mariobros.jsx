import React from "react";

function Mario() {
  return (
    <div className="bg-purple-100 min-h-screen flex flex-col items-center pt-16 sm:pt-20 px-4 sm:px-8 md:px-10 pb-16 sm:pb-20">
      {/* Titre */}
      <h1
        className="
          text-4xl 
          sm:text-5xl 
          md:text-6xl 
          lg:text-7xl 
          font-bold 
          text-center 
          text-transparent 
          bg-clip-text 
          bg-gradient-to-r 
          from-indigo-600 to-pink-500 
          mb-10 sm:mb-16
        "
      >
        Jeu Mario Bros
      </h1>

      {/* Contenu (image + texte) */}
      <div
        className="
          flex flex-col 
          md:flex-row 
          justify-center 
          items-center 
          md:items-start 
          gap-6 sm:gap-8 md:gap-10 
          w-full 
          max-w-screen-xl
        "
      >
        {/* Bloc image */}
        <div className="w-full md:w-3/5 flex justify-center">
          <div className="border-4 border-[#B68CD1] bg-white rounded-md p-4 sm:p-6 w-full md:w-auto flex flex-col items-center">
            <figure className="text-center">
              <img
                src="/mariomidlife.png"
                alt="Mario"
                className="w-full max-w-[500px] h-auto object-contain"
              />
              <figcaption className="mt-2 text-sm text-gray-600">
                Le joueur a perdu la moitié de sa vie.
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Bloc texte */}
        <div className="w-full md:w-2/5 mt-6 md:mt-0">
          <div className="border-4 border-[#B68CD1] bg-white rounded-md p-4 sm:p-6 h-full">
            <p className="text-[#6546da] text-justify leading-relaxed text-base sm:text-lg">
              Je voulais jouer à Super Mario Bros Wonder mais sans la Switch 2, alors j'ai décidé de coder mon propre prototype en Python.
              Inspiré de Mario, le jeu est un platformer 2D où le personnage se déplace avec les flèches et lance des boules de feu avec la touche Z pour éliminer les ennemis.
              <br /><br />
              Si Mario se fait toucher deux fois, la partie est terminée. J'ai utilisé Pygame pour la logique et Canva pour les décors.
              Ce projet était un véritable défi pour moi en tant que débutante, surtout pour déboguer le code et gérer la gravité lorsque Mario saute.
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
