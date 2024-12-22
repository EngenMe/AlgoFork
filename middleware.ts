import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["ar", "en", "fr"],
  defaultLocale: "ar",
});

export const config = {
  matcher: ["/", "/(ar|fr|en)/:path*"],
};
