# 🐾 Refuge Animalier de Cours-les-Barres — Interface Admin

Démo front-end statique pour l'administration du refuge, hébergeable sur **GitHub Pages**.

## 📁 Structure du projet

```
refuge-animalier/
├── index.html        ← Page de connexion
├── cats.html         ← Liste de tous les chats
├── detail.html       ← Détail d'un chat (?id=1)
├── add.html          ← Formulaire d'accueil d'un nouveau chat
├── rdv.html          ← Agenda / rendez-vous
├── css/
│   └── style.css     ← Styles globaux partagés
└── js/
    └── data.js       ← Données mock + utilitaires partagés
```

## 🚀 Déploiement sur GitHub Pages

1. Créer un repository public sur GitHub
2. Uploader tous les fichiers à la racine du repo
3. Dans **Settings → Pages**, sélectionner la branche `main` et le dossier `/ (root)`
4. Accéder à `https://<votre-username>.github.io/<nom-du-repo>/`

## 🔐 Connexion

| Identifiant | Mot de passe |
|-------------|--------------|
| `admin`     | `admin`      |

*(Démo uniquement — aucune sécurité réelle)*

## ✨ Fonctionnalités

- **Connexion** avec session (sessionStorage)
- **Liste des chats** avec recherche, filtres par statut et sexe
- **Fiche détaillée** avec galerie photos, statut éditable, informations santé, foyer d'adoption
- **Accueil d'un nouveau chat** avec formulaire complet et prévisualisation photos
- **Agenda rendez-vous** avec calendrier mensuel et liste des prochains RDV
- Navigation fluide, toasts de notification, animations CSS

## 🛠 Technologies

- HTML5 / CSS3 / Vanilla JavaScript (aucune dépendance)
- Google Fonts (Nunito + Lora)
- Images : Unsplash (URLs directes)
