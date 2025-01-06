"use client";

import { getTextDirection } from "@/utils/getTextDirection";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

const Paragraph = () => {
  const t = useTranslations();
  const pathname = usePathname();

  return (
    <p
      dir={getTextDirection(pathname)}
      className="text-background text-center font-semibold pt-12 max-w-xl mx-auto"
    >
      {t("hero-elevateYourProgramming")}
    </p>
  );
};
export default Paragraph;
