"use client";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

const Paragraph = () => {
  const t = useTranslations();

  const pathname = usePathname();
  const isArabic = pathname.includes("/ar");
  const textDirection = isArabic ? "rtl" : "ltr";

  return (
    <p
      dir={textDirection}
      className="text-background text-center font-semibold pt-12 max-w-xl mx-auto"
    >
      {t("heroParagraph")}
    </p>
  );
};
export default Paragraph;
