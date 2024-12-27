"use client";

import { cn } from "@/lib/utils";
import { getTextDirection } from "@/utils/getTextDirection";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

interface Props {
  children: string;
  classname?: string;
}

const Paragraph = ({ children, classname = "" }: Props) => {
  const t = useTranslations();
  const pathname = usePathname();

  return (
    <p
      dir={getTextDirection(pathname)}
      className={cn(classname, "text-muted-foreground")}
    >
      {t(children)}
    </p>
  );
};
export default Paragraph;
