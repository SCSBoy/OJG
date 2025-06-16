# Application de Gestion des Étudiants

Application web simple pour gérer une liste d'étudiants avec Firebase.

## Technologies utilisées

- HTML5
- CSS3
- JavaScript (ES6+)
- Firebase (Firestore, Authentication, Analytics)

## Configuration requise

1. Un compte Firebase
2. Un projet Firebase configuré
3. Les règles de sécurité Firebase configurées

## Installation

1. Clonez le repository :
```bash
git clone [URL_DU_REPO]
```

2. Configurez Firebase :
   - Créez un projet sur [Firebase Console](https://console.firebase.google.com)
   - Activez Firestore Database
   - Activez Authentication (mode anonyme)
   - Copiez les informations de configuration dans `src/js/firebase-config.js`

3. Lancez le serveur local :
```bash
python -m http.server 8000
```

4. Accédez à l'application :
   - Ouvrez votre navigateur
   - Visitez `http://localhost:8000`

## Structure du projet

```
.
├── index.html
├── src/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       ├── firebase-config.js
│       ├── etudiants.js
│       └── ui.js
└── README.md
```

## Fonctionnalités

- Ajout d'étudiants
- Affichage de la liste des étudiants
- Stockage persistant avec Firebase
- Interface responsive
- Authentification anonyme

## Sécurité

- Les règles de sécurité Firebase sont configurées pour le mode production
- L'authentification anonyme est requise pour les opérations d'écriture
- La lecture est publique 
