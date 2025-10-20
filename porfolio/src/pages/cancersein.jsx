import React from "react";

function Cancersein() {
  return (
    <div className="bg-purple-100 min-h-screen flex flex-col items-center pt-20 px-10 pb-20">
      {/* Titre */}
      <h1 className="text-7xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500 mb-16">
        Machine Learning cancer du sein
      </h1>

      <div className="flex flex-row justify-center items-start gap-10 w-full max-w-screen-xl">
        
        {/* Bloc image - 3/5 */}
        <div className="w-3/5 self-start">
          <div className="border-4 border-[#B68CD1] bg-white rounded-md p-6 w-full flex flex-col items-center">
        
        <figure className="text-center">
         <img
            src="/heatmapcancersein.png"
            alt="Buket"
            className=""
            />
            <figcaption className="mt-2 text-sm text-gray-600">
               Ce Heatmap permet de déterminer les variables les plus importantes pour détecter le cancer. 
            </figcaption>
        </figure>
          </div>
        </div>

        {/* Bloc texte - 2/5 */}
        <div className="w-2/5">
          <div className="border-4 border-[#B68CD1] bg-white rounded-md p-6 h-full">
            <p className="text-justify text-[#6546da] leading-relaxed">
              J'ai réalisé ce projet car la santé des femmes est importante pour moi. Je souhaite travailler pour une tehcnologie au service de la santé.
                J'ai utilisé Python avec Jupyter Notebook, pratique pour visualiser les données, en m'appuyant sur le dataset du Wisconsin Breast Cancer disponible via Scikit-Learn. 
                <br /><br />
                J'ai aussi utilisé des librairies comme Numpy, Pandas et Matplotlib. 
                C'était mon premier projet en IA, donc j'ai dû apprendre beaucoup de choses, y compris comment utiliser Jupyter, qui est différent de mon environnement habituel.
                <br /><br />
                Pour l'instant, j'ai opté pour un modèle simple, un arbre de décision, mais je souhaite passer à une approche plus robuste comme la forêt aléatoire 
                et trouver des données plus récentes pour améliorer la fiabilité du modèle.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Cancersein; 