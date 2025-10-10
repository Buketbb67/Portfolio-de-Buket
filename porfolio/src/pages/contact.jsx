import React from "react";

function Contact () {
    return <form>
        <h1>Formulaire de contact</h1>

        <label>Nom <input type="text" name="Nom" required/>
        </label>
        <label>Prenom <input type="text" name="Prenom" required/>
        </label>
        <label>Numéro de téléphone 
        <input type="text" name="Numero"required/>
        </label>
        <label> Adresse mail 
        <input type="mail" name="mail"required/>
        </label>
        
        <button type="submit">Envoyer</button>
    </form>
}


export default Contact;

{/* rajouter dans le champ mail obligatoire d'avoir un mail et pareil numéro de tel*/}