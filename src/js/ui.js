import { ajouterEtudiant, recupererEtudiants } from './etudiants.js';
import { initialiserAuth } from './firebase-config.js';

export function showAlert(message, type) {
    const alert = document.getElementById('alert');
    alert.textContent = message;
    alert.className = `alert alert-${type}`;
    alert.style.display = 'block';
    setTimeout(() => {
        alert.style.display = 'none';
    }, 3000);
}

export async function updateListeEtudiants() {
    const liste = document.getElementById('liste');
    liste.innerHTML = '';
    const etudiants = await recupererEtudiants();
    etudiants.forEach(etudiant => {
        const li = document.createElement('li');
        li.textContent = etudiant.nom;
        liste.appendChild(li);
    });
}

export async function initialiserUI() {
    // Initialiser l'authentification
    await initialiserAuth();
    
    const inputNom = document.getElementById('nom');
    
    // Gestionnaire pour le bouton d'ajout
    document.querySelector('button').addEventListener('click', async () => {
        const success = await ajouterEtudiant(inputNom.value);
        if (success) {
            inputNom.value = '';
            await updateListeEtudiants();
        }
    });

    // Gestionnaire pour la touche Entrée
    inputNom.addEventListener('keypress', async (e) => {
        if (e.key === 'Enter') {
            const success = await ajouterEtudiant(inputNom.value);
            if (success) {
                inputNom.value = '';
                await updateListeEtudiants();
            }
        }
    });

    // Chargement initial des étudiants
    await updateListeEtudiants();
} 