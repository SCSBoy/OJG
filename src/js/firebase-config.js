import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";
import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Configuration Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDUE8XB4Bdlqx7PYFVD-_0Gza2bX7QTZQk",
    authDomain: "orchestrejeunegloire-7e29f.firebaseapp.com",
    projectId: "orchestrejeunegloire-7e29f",
    storageBucket: "orchestrejeunegloire-7e29f.firebasestorage.app",
    messagingSenderId: "358718457292",
    appId: "1:358718457292:web:cbca00fd929547af35c969",
    measurementId: "G-PWLQR6ZZMW"
};

// Initialisation de Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);

// Authentification anonyme
export async function initialiserAuth() {
    try {
        await signInAnonymously(auth);
        console.log("Authentification anonyme réussie");
    } catch (error) {
        console.error("Erreur d'authentification:", error);
    }
}

// Note: La collection "etudiants" sera créée automatiquement lors de la première insertion
// Les règles de sécurité doivent être configurées dans la console Firebase 