import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations();

  return (
    <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
      {t("login-byClickingOn")} <a href="#">{t("login-termsOfServices")}</a>{" "}
      {t("login-and")} <a href="#">{t("login-privacyPolicy")}</a>.
    </div>
  );
};
export default Footer;
