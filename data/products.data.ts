import { Product } from "@/interfaces/Product.interface";

export const products: Product[] = [
  {
    image: "/products/topTechQuestions.png",
    title: "topTechCompany",
    paragraph: "prepareForInterviews",
    buttonTitle: "exploreQuestions",
    buttonRedirectTo: "/questions/companies",
  },
  {
    image: "/products/frontendSkills.png",
    title: "frontendSkills",
    paragraph: "enhanceYourFrontend",
    buttonTitle: "learnFrontend",
    buttonRedirectTo: "/questions/frontend",
  },
  {
    image: "/products/databaseSkills.png",
    title: "databaseSkills",
    paragraph: "masterSqlAnd",
    buttonTitle: "improveDatabaseSkills",
    buttonRedirectTo: "/questions/database",
  },
];
