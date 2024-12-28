"use client";

import { footerAccordions } from "@/data/footerAccordions.data";
import { getTextDirection } from "@/utils/getTextDirection";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

const FooterItems = () => {
  const t = useTranslations();
  const pathname = usePathname();

  return (
    <div
      dir={getTextDirection(pathname)}
      className="max-w-7xl mx-auto py-10 px-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {footerAccordions.map((section) => (
          <div key={section.value}>
            <h3 className="text-md font-semibold text-white mb-4">
              {t(section.title)}
            </h3>
            <ul className="space-y-2">
              {section.content.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-zinc-300 hover:text-white hover:underline transition-all"
                  >
                    {t(item.title)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterItems;
