"use client";

import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import { usePathname, useRouter } from "next/navigation";
import { getTextDirection } from "@/utils/getTextDirection";
import { useState } from "react";

const LoginButton = () => {
  const t = useTranslations();
  const pathname = usePathname();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    router.push(`${pathname}/login`);
  };

  return (
    <Button
      variant="secondary"
      dir={getTextDirection(pathname)}
      onClick={handleClick}
      className="w-full lg:w-32 lg:h-11 shadow-md bg-background font-bold hover:bg-transparent border-2 border-background hover:text-background"
    >
      {isLoading ? t("loginButtonLoading") : t("login")}
    </Button>
  );
};
export default LoginButton;
