import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations();

  return (
    <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
      {t("loginByClickingContinue")} <a href="#">{t("loginTerms")}</a>{" "}
      {t("and")} <a href="#">{t("loginPrivacy")}</a>.
    </div>
  );
};
export default Footer;
