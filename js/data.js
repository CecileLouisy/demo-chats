/* ================================================================
   data.js — Données partagées & utilitaires globaux
   ================================================================ */

// ── DONNÉES MOCK ──────────────────────────────────────────────────
const CATS_DATA = [
  {
    id: 1,
    nom: "Orion",
    sexe: "M",
    age: "1 an",
    naissance: "01/01/2025",
    puce: "053 6987 4A",
    tatouage: "OR-2025-01",
    couleur: "Gris",
    statut: "réservé",
    photo: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&q=80",
    photos: [
      "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&q=80",
      "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=600&q=80",
      "https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=600&q=80"
    ],
    description: "Orion est un chat mâle d'un an, curieux et plein d'énergie. Très joueur, il adore explorer, courir après tout ce qui bouge et venir chercher de l'attention quand il en a envie. Affectueux sans être collant, il aime les câlins une fois en confiance et sait aussi profiter de ses moments de calme au soleil.",
    sante: "Vacciné, stérilisé, traitement antiparasitaire à jour.",
    foyer: { nom: "DUPONT", adresse: "45 rue de la Patte, 18320 Cours-les-Barres", tel: "02.48.36.29.66", contact: "Marie Dupont" }
  },
  {
    id: 2,
    nom: "Oreo",
    sexe: "M",
    age: "2 ans",
    naissance: "15/03/2023",
    puce: "076 4521 3B",
    tatouage: "OR-2023-02",
    couleur: "Noir et blanc",
    statut: "disponible",
    photo: "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?w=600&q=80",
    photos: [
      "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?w=600&q=80",
      "https://images.unsplash.com/photo-1561948955-570b270e7c36?w=600&q=80"
    ],
    description: "Oreo est un grand chat noir et blanc au caractère bien trempé. Indépendant et observateur, il prend le temps d'apprivoiser les gens avant de leur accorder sa confiance. Une fois à l'aise, il devient un compagnon fidèle et attachant.",
    sante: "Vacciné, stérilisé.",
    foyer: null
  },
  {
    id: 3,
    nom: "Nala",
    sexe: "F",
    age: "8 mois",
    naissance: "01/07/2024",
    puce: "089 7412 5C",
    tatouage: "NA-2024-01",
    couleur: "Tigré brun",
    statut: "disponible",
    photo: "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=600&q=80",
    photos: [
      "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=600&q=80",
      "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=600&q=80"
    ],
    description: "Nala est une jeune chatte au pelage magnifique, vive et espiègle. Elle adore jouer et grimper, mais sait aussi se montrer douce et câline au moment des siestes.",
    sante: "Vaccinée, stérilisée.",
    foyer: null
  },
  {
    id: 4,
    nom: "Salem",
    sexe: "M",
    age: "9 mois",
    naissance: "01/06/2024",
    puce: "045 3698 7D",
    tatouage: "SA-2024-01",
    couleur: "Noir",
    statut: "disponible",
    photo: "https://images.unsplash.com/photo-1611915387288-fd8d2f5f928b?w=600&q=80",
    photos: [
      "https://images.unsplash.com/photo-1611915387288-fd8d2f5f928b?w=600&q=80",
      "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=600&q=80"
    ],
    description: "Salem est un chat tout noir, mystérieux et élégant. Discret au premier abord, il devient un vrai pot de colle une fois en confiance. Il adore les longues sessions de câlins.",
    sante: "Vacciné, en cours de stérilisation.",
    foyer: null
  },
  {
    id: 5,
    nom: "Toupie",
    sexe: "M",
    age: "10 ans",
    naissance: "01/01/2015",
    puce: "012 5874 6E",
    tatouage: "TO-2015-01",
    couleur: "Gris",
    statut: "adopté",
    photo: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=600&q=80",
    photos: [
      "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=600&q=80",
      "https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?w=600&q=80"
    ],
    description: "Toupie est un vieux sage. Calme, posé, il préfère les longues siestes au soleil aux parties de jeux frénétiques. Il sera le compagnon idéal pour un foyer tranquille.",
    sante: "Suivi vétérinaire régulier, traitement pour les articulations.",
    foyer: { nom: "MARTIN", adresse: "12 allée des Chênes, 18320 Cours-les-Barres", tel: "02.48.12.45.67", contact: "Paul Martin" }
  },
  {
    id: 6,
    nom: "Tsuki",
    sexe: "F",
    age: "2 mois",
    naissance: "01/01/2025",
    puce: "098 7456 1F",
    tatouage: "TS-2025-01",
    couleur: "Roux et blanc",
    statut: "disponible",
    photo: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80",
    photos: [
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80",
      "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?w=600&q=80"
    ],
    description: "Tsuki est un adorable chaton roux et blanc, encore tout petit et plein de candeur. Elle découvre le monde avec émerveillement et adore se blottir contre les humains.",
    sante: "Première vaccination effectuée.",
    foyer: null
  }
];

// ── SESSION ──────────────────────────────────────────────────────
function isLoggedIn() {
  return sessionStorage.getItem('refuge_auth') === 'true';
}
function logout() {
  sessionStorage.removeItem('refuge_auth');
  window.location.href = 'index.html';
}

// ── TOAST ────────────────────────────────────────────────────────
function showToast(msg) {
  let t = document.getElementById('toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'toast';
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

// ── PAWS BACKGROUND ──────────────────────────────────────────────
function initPaws() {
  const container = document.getElementById('pawsBg');
  if (!container) return;
  const paws = ['🐾'];
  const count = 18;
  for (let i = 0; i < count; i++) {
    const el = document.createElement('div');
    el.className = 'paw-item';
    el.textContent = paws[0];
    el.style.left = `${Math.random() * 100}%`;
    el.style.top = `${Math.random() * 100}%`;
    el.style.fontSize = `${1.2 + Math.random() * 2}rem`;
    el.style.animationDuration = `${5 + Math.random() * 6}s`;
    el.style.animationDelay = `${Math.random() * 5}s`;
    el.style.transform = `rotate(${Math.random() * 40 - 20}deg)`;
    container.appendChild(el);
  }
}

// ── HEADER + NAVBAR injection ─────────────────────────────────────
function injectHeader(activePage) {
  const header = document.getElementById('appHeader');
  if (!header) return;
  header.innerHTML = `
    <div class="header-left">
      <div class="header-logo">🐾</div>
      <div>
        <div class="header-title">Administration — Refuge Animalier de Cours-les-Barres</div>
        <div class="header-subtitle">Espace de gestion</div>
      </div>
    </div>
    <a href="index.html" class="btn-logout" title="Déconnexion" onclick="logout(); return false;">⏻</a>
  `;

  const nav = document.getElementById('appNav');
  if (!nav) return;
  nav.innerHTML = `
    <a href="add.html"    class="nav-btn ${activePage==='add'?'active':''}">+ Accueillir un chat</a>
    <a href="cats.html"   class="nav-btn ${activePage==='cats'?'active':''}">Tous les chats</a>
    <a href="rdv.html"    class="nav-btn ${activePage==='rdv'?'active':''}">Mes rendez-vous</a>
  `;
}

// ── BADGE STATUT ─────────────────────────────────────────────────
function statusBadge(statut) {
  return `<span class="badge badge-${statut}">${statut}</span>`;
}

// ── BADGE SEXE ───────────────────────────────────────────────────
function sexeIcon(sexe) {
  return sexe === 'M'
    ? '<span class="badge badge-m">♂ Mâle</span>'
    : '<span class="badge badge-f">♀ Femelle</span>';
}

// ── GUARD: redirect if not logged in ─────────────────────────────
function requireAuth() {
  if (!isLoggedIn()) {
    window.location.href = 'index.html';
  }
}
