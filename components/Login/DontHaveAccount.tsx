import { useTranslations } from "next-intl";

const DontHaveAccount = () => {
  const t = useTranslations();

  return (
    <div className="text-center text-sm flex justify-between items-center">
      {t("login-dontHaveAn")}
      <a href="#" className="underline underline-offset-4 hover:text-primary">
        {t("login-signUp")}
      </a>
    </div>
  );
};
export default DontHaveAccount;
