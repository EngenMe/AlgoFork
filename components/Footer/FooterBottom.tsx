"use client";

import { bottomFooters } from "@/data/bottomFooters";
import { getTextDirection } from "@/utils/getTextDirection";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

const FooterBottom = () => {
  const t = useTranslations();
  const pathname = usePathname();
  const textDirection = getTextDirection(pathname);

  return (
    <div
      dir={textDirection}
      className="flex flex-col md:flex-row justify-between items-center"
    >
      <p className="text-sm text-zinc-400 text-center">
        &copy; {new Date().getFullYear()} AlgoFork.{" "}
        {t("footer-allRightsReserved")}.
      </p>
      <ul className="flex gap-4 mt-10 md:mt-0">
        {bottomFooters.map((item, index) => (
          <li key={index}>
            <a href={item.href} className="hover:underline">
              {t(item.title)}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default FooterBottom;
