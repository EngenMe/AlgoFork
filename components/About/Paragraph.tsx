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
      className="text-center text-muted-foreground px-4 md:px-10 lg:w-3/5"
    >
      {t("aboutParagraph")}
    </p>
  );
};
export default Paragraph;
