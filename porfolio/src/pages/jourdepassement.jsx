import React, {useState} from "react";

function Jourdepassement() {
  return (
    <div className="bg-purple-100 min-h-screen flex flex-col items-center pt-20 px-10 pb-20">
      {/* Titre */}
      <h1 className="text-7xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500 mb-16">
        Jour du dépassement
      </h1>

      <div className="flex flex-row justify-center items-start gap-10 w-full max-w-screen-xl">
        
        {/* Bloc image - 3/5 */}
        <div className="w-3/5 self-start">
          <div className="border-4 border-[#B68CD1] bg-white rounded-md p-6 w-full flex flex-col items-center">
        
        <figure className="text-center">
         <img
            src="/streamlitjourdepassement.png"
            alt="Buket"
            className=""
            />
            <figcaption className="mt-2 text-sm text-gray-600">
               Comparaison du jour du dépassement du Qatar et du Yemen en 2022. 
            </figcaption>
        </figure>
          </div>
        </div>

        {/* Bloc texte - 2/5 */}
        <div className="w-2/5">
          <div className="border-4 border-[#B68CD1] bg-white rounded-md p-6 h-full">
            <p className="text-justify text-[#6546da] leading-relaxed">
                En 2025, le jour du dépassement de la terre était le 24 juillet. Mais est-ce la même date pour tous les pays ? 
                Ce projet est né de cette interrogation. Il explore la variation du jour du dépassement écologique selon les pays, à partir du Global Footprint Dataset.
                <br /><br />
                J'ai développé une interface interactive avec Streamlit permettant de comparer les jours du dépassement pour 2022 et 2024.
                A titre d'exemple, en 2022, si tout le monde vivait comme un Qatari, le jour de dépassement serait le 22 janvier. 
                <br /><br />
                Si toute la planète vivait comme un yéménite, le jour de dépassement serait le 3 juillet de l'année d'après.
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