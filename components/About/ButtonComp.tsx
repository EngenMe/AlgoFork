"use client";

import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { getTextDirection } from "@/utils/getTextDirection";
import { cn } from "@/lib/utils";

interface Props {
  children: string;
  classname?: string;
  type?: "submit" | "reset" | "button" | undefined;
}

const ButtonComp = ({ children, classname = "", type = undefined }: Props) => {
  const t = useTranslations();
  const pathname = usePathname();

  return (
    <Button
      dir={getTextDirection(pathname)}
      type={type}
      className={cn(
        classname,
        "bg-gradient-to-r from-primary to-secondary font-semibold py-6 shadow-xl hover:shadow-md hover:opacity-90 transition-all"
      )}
    >
      {t(children)}
    </Button>
  );
};
export default ButtonComp;
