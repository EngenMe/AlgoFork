"use client";

import { cn } from "@/lib/utils";
import { getTextDirection } from "@/utils/getTextDirection";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

interface Props {
  children: string;
  classname?: string;
}

const Header = ({ children, classname = "" }: Props) => {
  const t = useTranslations();
  const pathname = usePathname();

  return (
    <h1
      className={cn(classname, "text-3xl font-bold")}
      dir={getTextDirection(pathname)}
    >
      {t(children)}
    </h1>
  );
};
export default Header;
