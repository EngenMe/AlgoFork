import { useTranslations } from "next-intl";
import { Button } from "../ui/button";

const LoginButton = () => {
  const t = useTranslations();

  return (
    <Button
      variant="outline"
      className="border-2 border-background text-background bg-transparent shadow-md font-semibold"
    >
      {t("login")}
    </Button>
  );
};
export default LoginButton;
