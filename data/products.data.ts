import { Product } from "@/interfaces/Product.interface";

export const products: Product[] = [
  {
    image: "/products/topTechQuestions.png",
    title: "product1Title",
    paragraph: "product1ParagraphTitle",
    buttonTitle: "product1ButtonTitle",
    buttonRedirectTo: "/questions/companies",
  },
  {
    image: "/products/frontendSkills.png",
    title: "product2Title",
    paragraph: "product2ParagraphTitle",
    buttonTitle: "product2ButtonTitle",
    buttonRedirectTo: "/questions/frontend",
  },
  {
    image: "/products/databaseSkills.png",
    title: "product3Title",
    paragraph: "product3ParagraphTitle",
    buttonTitle: "product3ButtonTitle",
    buttonRedirectTo: "/questions/database",
  },
];
