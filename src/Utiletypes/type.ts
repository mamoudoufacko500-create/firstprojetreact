import { Services } from "./../data/data";
export type menuItem = {
  title: string;
  link: string;
};

export type ServicesItem = {
  Image: string;
  sous_titre: string;
  description: string;
};

export type Citation = {
  texte: string;
  auteur: string;
  photo?: string;
};