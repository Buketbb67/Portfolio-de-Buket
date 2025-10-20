import React, { useState } from "react";

function Bouton({ label, onClick }) {
  return (
    <button
      className="bg-white border-2 border-[#B68CD1] text-[#6546da] rounded px-4 py-2 hover:bg-[#F0E6F7] transition text-center text-xl"
      onClick={onClick}
    >
      {label}
    </button>
  );
}

function Boutonapropos() {
  const pages = [
    "Je m’appelle Buket Bagci et je suis aujourd'hui développeuse en devenir, et pourtant rien ne me prédestinait à l'informatique. Comment en suis-je arrivée là ? Voyons ensemble mon parcours.",
    "Avant l'informatique, j'étais journaliste. J'ai travaillé pour France Télévisions, Arte et BFMTV. J'ai voyagé partout en France et parfois à l'étranger pour réaliser des reportages pour ces chaînes.",
    "Ensuite, j'ai œuvré dans le secteur associatif, notamment à la Banque Alimentaire. J'étais assistante de direction, RH et responsable communication. J'y ai appris beaucoup de compétences mais je sentais qu'il manquait quelque chose.",
    "En quête d'identité profesionnelle, j'ai alors décidé de faire un bilan de compétences pour mettre des mots sur mon souhait professionnel.",
    "Aujourd’hui, j'apprends avec enthousiasme l'informatique et plus précisément le développement. Ce domaine stimule ma curiosité, correspond à mes valeurs et me permet de construire des solutions concrètes et durables."
  ];

  const [page, setPage] = useState(0); 

  const goNext = () => {
    if (page < pages.length - 1) setPage(page + 1);
  };

  const goBack = () => {
    if (page > 0) setPage(page - 1);
  };

  return (
    <div className="flex flex-col items-center justify-between h-full">
      <div className="text-md text-[#6546da] text-center px-6 whitespace-pre-line max-w-2xl ">
        {pages[page]}
      </div>

      <div className="flex justify-between w-full max-w-sm px-4 self-center mt-8">
        <Bouton label="← Précédent" onClick={goBack} />
        <Bouton label="Suivant →" onClick={goNext} />
      </div>
    </div>
  );
}

export default Boutonapropos;
