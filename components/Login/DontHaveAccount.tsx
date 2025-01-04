import { useTranslations } from "next-intl";

const DontHaveAccount = () => {
  const t = useTranslations();

  return (
    <div className="text-center text-sm flex justify-between items-center">
      {t("loginDontHaveAccount")}
      <a href="#" className="underline underline-offset-4 hover:text-primary">
        {t("loginSignUp")}
      </a>
    </div>
  );
};
export default DontHaveAccount;
