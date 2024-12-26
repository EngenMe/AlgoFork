"use client";

import { getTextDirection } from "@/utils/getTextDirection";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

interface Props {
  children: string;
}

const Header = ({ children }: Props) => {
  const t = useTranslations();
  const pathname = usePathname();

  return (
    <h1
      className="text-3xl font-bold text-center"
      dir={getTextDirection(pathname)}
    >
      {t(children)}
    </h1>
  );
};
export default Header;