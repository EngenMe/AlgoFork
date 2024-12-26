import { navItems } from "@/data/navItems.data";
import NavItemComp from "./NavItemComp";
import { useTranslations } from "next-intl";

const NavList = () => {
  const t = useTranslations();

  return (
    <nav className="pt-10 lg:pt-0 flex flex-col lg:flex-row gap-5">
      {navItems.map((item, index) => (
        <NavItemComp key={index} title={t(item.title)} link={item.link} />
      ))}
    </nav>
  );
};
export default NavList;
