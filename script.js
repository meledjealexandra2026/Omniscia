// ===============================
// OMNISCIA – IA ANALYZER
// Version corrigée & stable
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    // Récupération des éléments du DOM
    const prenomInput = document.getElementById("prenom");
    const dateInput = document.getElementById("dateNaissance");
    const btnAnalyser = document.getElementById("btnAnalyser");
    const btnReset = document.getElementById("btnReset");

    const messageBienvenue = document.getElementById("messageBienvenue");
    const analyseIA = document.getElementById("analyseIA");
    const profil = document.getElementById("profil");

    // Sécurité : si un élément manque
    if (!prenomInput || !dateInput || !btnAnalyser) {
        console.error("Un élément HTML est manquant.");
        return;
    }

    // On cache le profil au chargement
    profil.style.display = "none";

    // Fonction signe astrologique
    function determinerSigne(date) {
        const jour = date.getDate();
        const mois = date.getMonth() + 1;

        if ((mois === 3 && jour >= 21) || (mois === 4 && jour <= 19)) return "Bélier";
        if ((mois === 4 && jour >= 20) || (mois === 5 && jour <= 20)) return "Taureau";
        if ((mois === 5 && jour >= 21) || (mois === 6 && jour <= 20)) return "Gémeaux";
        if ((mois === 6 && jour >= 21) || (mois === 7 && jour <= 22)) return "Cancer";
        if ((mois === 7 && jour >= 23) || (mois === 8 && jour <= 22)) return "Lion";
        if ((mois === 8 && jour >= 23) || (mois === 9 && jour <= 22)) return "Vierge";
        if ((mois === 9 && jour >= 23) || (mois === 10 && jour <= 22)) return "Balance";
        if ((mois === 10 && jour >= 23) || (mois === 11 && jour <= 21)) return "Scorpion";
        if ((mois === 11 && jour >= 22) || (mois === 12 && jour <= 21)) return "Sagittaire";
        if ((mois === 12 && jour >= 22) || (mois === 1 && jour <= 19)) return "Capricorne";
        if ((mois === 1 && jour >= 20) || (mois === 2 && jour <= 18)) return "Verseau";
        return "Poissons";
    }

    // Bouton "Créer mon profil"
    btnAnalyser.addEventListener("click", () => {
        const prenom = prenomInput.value.trim();
        const dateNaissance = new Date(dateInput.value);

        if (prenom === "" || isNaN(dateNaissance)) {
            alert("Merci de remplir ton prénom et ta date de naissance ✨");
            return;
        }

        const signe = determinerSigne(dateNaissance);

        messageBienvenue.textContent = `Bienvenue ${prenom} 🌙`;
        analyseIA.textContent =
            `Ton signe astrologique est ${signe}. 
            Tu sembles animé(e) par une forte curiosité intérieure,
            une quête de sens et de compréhension profonde du monde.
            Omniscia est un espace pensé pour ce type de profils introspectifs.`;

        profil.style.display = "block";
        btnAnalyser.style.display = "none";
    });

    // Bouton "Quitter mon compte"
    btnReset.addEventListener("click", () => {
        prenomInput.value = "";
        dateInput.value = "";
        messageBienvenue.textContent = "";
        analyseIA.textContent = "";

        profil.style.display = "none";
        btnAnalyser.style.display = "block";
    });

});
