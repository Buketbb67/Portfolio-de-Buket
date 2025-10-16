import React from "react";

function Contact() {
  return (
    <div className="bg-purple-100 min-h-screen flex flex-col items-center pt-20">
      <h1 className="text-7xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500 mb-10">
        Contact
      </h1>

      <form className="w-full max-w-lg bg-white p-8 rounded-lg border-4 border-[#B68CD1] shadow-md space-y-6">
        <h2 className="text-4xl text-[#744D8C] font-bold text-center">
          Formulaire de contact
        </h2>

        <div className="flex flex-col">
          <label className="text-[#744D8C] font-medium mb-1" htmlFor="nom">
            Nom
          </label>
          <input
            type="text"
            name="nom"
            id="nom"
            required
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#B68CD1]"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-[#744D8C] font-medium mb-1" htmlFor="prenom">
            Prénom
          </label>
          <input
            type="text"
            name="prenom"
            id="prenom"
            required
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#B68CD1]"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-[#744D8C] font-medium mb-1" htmlFor="numero">
            Numéro de téléphone
          </label>
          <input
            type="text"
            name="numero"
            id="numero"
            required
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#B68CD1]"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-[#744D8C] font-medium mb-1" htmlFor="mail">
            Adresse mail
          </label>
          <input
            type="email"
            name="mail"
            id="mail"
            required
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#B68CD1]"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-[#744D8C] font-medium mb-1" htmlFor="message">
            Message
          </label>
          <input
            type="text"
            name="message"
            id="message"
            required
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#B68CD1]"
          />
        </div>

        <button
          type="submit"
          className="bg-[#744D8C] text-white font-semibold px-6 py-3 rounded hover:bg-[#5e3a71] transition"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
}

export default Contact;

