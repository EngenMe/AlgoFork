export type Locale = "en" | "ar" | "fr";

export type Namespace =
  | "common"
  | "about"
  | "ai"
  | "auth"
  | "footer"
  | "hero"
  | "products";

export interface Translations {
  [key: string]: string;
}
