import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

const LOCALES = ["ar", "en", "fr"];

export default getRequestConfig(async (context) => {
  const locale = await context.requestLocale;

  if (!locale || !LOCALES.includes(locale)) {
    return notFound();
  }

  return {
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
