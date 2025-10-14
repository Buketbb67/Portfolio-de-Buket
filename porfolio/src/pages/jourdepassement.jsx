import React, {useState} from "react";

function Jourdepassement () { 
    return (
    <p>En 2025, le jour du dépassement de la terre était le 24 juillet. Mais est-ce la même date pour tous les pays ? 
    Ce projet est né de cette interrogation. Il explore la variation du jour du dépassement écologique selon les pays, à partir du Global Footprint Dataset.
    J'ai développé une interface interactive avec Streamlit permettant de comparer les jours du dépassement pour 2022 et 2024.
    A titre d'exemple, en 2022, si tout le monde vivait comme un Qatari, le jour de dépassement serait le XXX JANVIER.
    Si toute la planète vivait comme un syrien, le jour de dépassement serait en XXX OCTOBRE DE L'ANNEE D'APRES
    Le modèle est codé en Python avec Pandas pour le traitement des données et Matplotlib pour les visualisations.
    Mes principales difficultés sont dues à la qualité des données, dépendantes des contributions nationales, ainsi qu'à l'optimisation de l'affichage pour assurer une bonne lisibilité.
    Pour améliorer le projet, je prévois de renforcer de rajouter un simulateur du jour du dépassement futur par pays.</p>
); 
}
export default Jourdepassement; 