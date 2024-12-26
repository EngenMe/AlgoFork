"use client";

import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { getTextDirection } from "@/utils/getTextDirection";

const ButtonComp = () => {
  const t = useTranslations();
  const pathname = usePathname();

  return (
    <Button
      dir={getTextDirection(pathname)}
      className="w-3/4 lg:w-3/12 bg-gradient-to-r from-primary to-secondary font-semibold py-6 shadow-xl hover:shadow-md hover:opacity-90 transition-all"
    >
      {t("aboutButtonTitle")}
    </Button>
  );
};
export default ButtonComp;
