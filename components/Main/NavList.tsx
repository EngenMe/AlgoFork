import { navItems } from "@/data/navItems";
import NavItemComp from "./NavItemComp";
import { useTranslations } from "next-intl";

const NavList = () => {
  const t = useTranslations();

  return (
    <div className="pt-10 lg:pt-0 flex flex-col lg:flex-row gap-5">
      {navItems.map((item, index) => (
        <NavItemComp key={index} title={t(item.title)} link={item.link} />
      ))}
    </div>
  );
};
export default NavList;
