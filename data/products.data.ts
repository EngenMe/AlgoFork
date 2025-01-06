import { Product } from "@/interfaces/Product.interface";

export const products: Product[] = [
  {
    image: "/products/topTechQuestions.webp",
    title: "products-topTechCompany",
    paragraph: "products-prepareForInterviews",
    buttonTitle: "products-exploreQuestions",
    buttonRedirectTo: "/questions/companies",
  },
  {
    image: "/products/frontendSkills.webp",
    title: "products-frontendSkills",
    paragraph: "products-enhanceYourFrontend",
    buttonTitle: "products-learnFrontend",
    buttonRedirectTo: "/questions/frontend",
  },
  {
    image: "/products/databaseSkills.webp",
    title: "products-databaseSkills",
    paragraph: "products-masterSqlAnd",
    buttonTitle: "products-improveDatabaseSkills",
    buttonRedirectTo: "/questions/database",
  },
];
