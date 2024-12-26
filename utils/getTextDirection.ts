export const getTextDirection = (pathname: string) => {
  const isArabic = pathname.includes("/ar");
  const textDirection = isArabic ? "rtl" : "ltr";

  return textDirection;
};
