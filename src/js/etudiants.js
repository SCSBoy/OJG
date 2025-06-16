import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { db } from './firebase-config.js';
import { showAlert } from './ui.js';

export async function ajouterEtudiant(nom) {
    if (!nom.trim()) {
        showAlert("Veuillez entrer un nom", "error");
        return;
    }
    
    try {
        await addDoc(collection(db, "etudiants"), { nom });
        showAlert("Étudiant ajouté avec succès !", "success");
        return true;
    } catch (error) {
        showAlert("Erreur lors de l'ajout de l'étudiant", "error");
        return false;
    }
}

export async function recupererEtudiants() {
    try {
        const querySnapshot = await getDocs(collection(db, "etudiants"));
        const etudiants = [];
        querySnapshot.forEach(doc => {
            etudiants.push({
                id: doc.id,
                ...doc.data()
            });
        });
        return etudiants;
    } catch (error) {
        showAlert("Erreur lors du chargement des étudiants", "error");
        return [];
    }
} 