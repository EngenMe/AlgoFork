"use client";

import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import { usePathname, useRouter } from "next/navigation";
import { getTextDirection } from "@/utils/getTextDirection";

const SignUpButton = () => {
  const t = useTranslations();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Button
      variant="secondary"
      dir={getTextDirection(pathname)}
      onClick={() => router.push(`${pathname}/login`)}
      className="w-full lg:w-32 lg:h-11 shadow-md bg-background font-bold hover:bg-transparent border-2 border-background hover:text-background"
    >
      {t("login")}
    </Button>
  );
};
export default SignUpButton;
