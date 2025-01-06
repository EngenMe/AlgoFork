import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

const namespaces = [
  "nav",
  "hero",
  "partners",
  "about",
  "products",
  "programmingLanguages",
  "login",
] as const;

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (
    !locale ||
    !routing.locales.includes(locale as (typeof routing.locales)[number])
  ) {
    locale = routing.defaultLocale;
  }

  const messages: Record<string, string> = {};

  await Promise.all(
    namespaces.map(async (namespace) => {
      try {
        const namespaceMessages = (
          await import(`../messages/${locale}/${namespace}.json`)
        ).default;
        Object.assign(messages, namespaceMessages);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        console.warn(
          `Missing namespace "${namespace}" for locale "${locale}".`
        );
      }
    })
  );

  return {
    locale,
    messages,
  };
});
