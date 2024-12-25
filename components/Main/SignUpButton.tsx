import { useTranslations } from "next-intl";
import { Button } from "../ui/button";

const SignUpButton = () => {
  const t = useTranslations();

  return (
    <Button
      variant="secondary"
      className="w-full lg:w-32 lg:h-11 shadow-md bg-background font-bold hover:bg-transparent border-2 border-background hover:text-background"
    >
      {t("signUp")}
    </Button>
  );
};
export default SignUpButton;
