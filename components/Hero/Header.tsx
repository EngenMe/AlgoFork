import { useTranslations } from "next-intl";

const Header = () => {
  const t = useTranslations();

  return (
    <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-center pt-12 text-background">
      <span className="inline-block mb-3 lg:px-64">{t("heroHeaderPt1")}</span>
      <br />
      <span className="inline-block mt-3">{t("heroHeaderPt2")}</span>
    </h1>
  );
};
export default Header;
