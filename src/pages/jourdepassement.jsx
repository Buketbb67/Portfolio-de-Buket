import React from "react";

function Jourdepassement() {
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
        Jour du dépassement
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
                src="/streamlitjourdepassement.png"
                alt="Jour du dépassement"
                className="w-full max-w-[500px] h-auto object-contain"
              />
              <figcaption className="mt-2 text-sm text-gray-600">
                Comparaison du jour du dépassement du Qatar et du Yemen en 2022.
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Bloc texte */}
        <div className="w-full md:w-2/5 mt-6 md:mt-0">
          <div className="border-4 border-[#B68CD1] bg-white rounded-md p-4 sm:p-6 h-full">
            <p className="text-[#6546da] text-justify leading-relaxed text-base sm:text-lg">
              En 2025, le jour du dépassement de la Terre était le 24 juillet. Mais est-ce la même date pour tous les pays ? 
              Ce projet est né de cette interrogation. Il explore la variation du jour du dépassement écologique selon les pays, à partir du Global Footprint Dataset.
              <br /><br />
              J'ai développé une interface interactive avec Streamlit permettant de comparer les jours du dépassement pour 2022 et 2024.
              À titre d'exemple, en 2022, si tout le monde vivait comme un Qatari, le jour de dépassement serait le 22 janvier. 
              <br /><br />
              Si toute la planète vivait comme un Yéménite, le jour de dépassement serait le 3 juillet de l'année d'après.
              Le modèle est codé en Python avec Pandas pour le traitement des données et Matplotlib pour les visualisations.
              <br /><br />
              Mes principales difficultés sont dues à la qualité des données, dépendantes des contributions nationales, ainsi qu'à l'optimisation de l'affichage pour assurer une bonne lisibilité.
              Pour améliorer le projet, je prévois de rajouter un prédicteur du jour du dépassement par pays pour les années à venir.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jourdepassement;
