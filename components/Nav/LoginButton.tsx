"use client";

import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { getTextDirection } from "@/utils/getTextDirection";

const LoginButton = () => {
  const t = useTranslations();
  const pathname = usePathname();

  return (
    <Button
      variant="outline"
      dir={getTextDirection(pathname)}
      className="w-full lg:w-32 lg:h-11 border-2 border-background text-background bg-transparent shadow-md font-bold"
    >
      {t("login")}
    </Button>
  );
};
export default LoginButton;
