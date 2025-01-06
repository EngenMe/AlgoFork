import { Product } from "@/interfaces/Product.interface";

export const products: Product[] = [
  {
    image: "/products/topTechQuestions.webp",
    title: "topTechCompany",
    paragraph: "prepareForInterviews",
    buttonTitle: "exploreQuestions",
    buttonRedirectTo: "/questions/companies",
  },
  {
    image: "/products/frontendSkills.webp",
    title: "frontendSkills",
    paragraph: "enhanceYourFrontend",
    buttonTitle: "learnFrontend",
    buttonRedirectTo: "/questions/frontend",
  },
  {
    image: "/products/databaseSkills.webp",
    title: "databaseSkills",
    paragraph: "masterSqlAnd",
    buttonTitle: "improveDatabaseSkills",
    buttonRedirectTo: "/questions/database",
  },
];
