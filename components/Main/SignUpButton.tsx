import { useTranslations } from "next-intl";
import { Button } from "../ui/button";

const SignUpButton = () => {
  const t = useTranslations();

  return (
    <Button
      variant="secondary"
      className="shadow-md bg-background text-sm font-semibold hover:bg-transparent border-2 border-background hover:text-background"
    >
      {t("signUp")}
    </Button>
  );
};
export default SignUpButton;
