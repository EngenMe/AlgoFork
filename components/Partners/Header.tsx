import { useTranslations } from "next-intl";

const Header = () => {
  const t = useTranslations();

  return (
    <h1 className="text-3xl font-bold text-center">{t("partnersHeader")}</h1>
  );
};
export default Header;
