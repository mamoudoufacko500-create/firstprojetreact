import type { menuItem, ServicesItem } from "../Utiletypes/type";

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

export const travel = [
  {
    id: 1,
    title: "Pour découvrir",
    description: "Vos objects publicitaires",
    color: "bg-blue-600",
  },
  {
    id: 2,
    title: "Pour découvrir",
    description: "Vos objects publicitaires",
    color: "bg-yellow-600",
  },
  {
    id: 3,
    title: "Pour découvrir",
    description: "Vos objects publicitaires",
    color: "bg-red-600",
  },
];
