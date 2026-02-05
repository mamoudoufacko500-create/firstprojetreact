import type { Citation, menuItem, ServicesItem } from "../Utiletypes/type";

export const menu: menuItem[] = [
  { title: "Accueil", link: "#" },
  { title: "A propos", link: "#" },
  { title: "Service", link: "#" },
  { title: "Contact", link: "#" },
];

export const Services: ServicesItem[] = [
  {
    Image: "service-1.jpg",
    sous_titre: "Conception web",
    description:
      "Concentrez-vous sur la manière dont vous pouvez aider et bénéficier à votre utilisateur. Utilisez des mots simples pour  ne pas embrouiller les gens.",
  },
  {
    Image: "service-2.jpg",
    sous_titre: "Design graphique",
    description:
      "Concentrez-vous sur la manière dont vous pouvez aider et bénéficier à votre utilisateur. Utilisez des mots simples pour  ne pas embrouiller les gens.",
  },
  {
    Image: "service-3.jpg",
    sous_titre: "Création de contenu",
    description:
      "Concentrez-vous sur la manière dont vous pouvez aider et bénéficier à votre utilisateur. Utilisez des mots simples pour  ne pas embrouiller les gens.",
  },
];





export const citations: Citation[] = [
  {
    texte: " « Place ta confiance en Allah, Il te suffira. » ",
    auteur: "Ibn Taymiyya",
  },
  {
    texte: " « La patience est la clé de la délivrance. » ",
    auteur: "Umar Ibn Al-Khattab",
  },
  {
    texte: " « Celui qui craint Allah, Il lui donnera une issue. » ",
    auteur: "Coran 65:2",
  },
  {
    texte: " « Originales et dotées d’une compréhension innée  des besoins de leurs clients, l’équipe de Love  Nature est toujours un plaisir de travailler. »",
    auteur: "Jane Miller",
    photo: "avatar_on_home.png",
  },
];
