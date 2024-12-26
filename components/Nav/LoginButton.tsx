import { useTranslations } from "next-intl";
import { Button } from "../ui/button";

const LoginButton = () => {
  const t = useTranslations();

  return (
    <Button
      variant="outline"
      className="w-full lg:w-32 lg:h-11 border-2 border-background text-background bg-transparent shadow-md font-bold"
    >
      {t("login")}
    </Button>
  );
};
export default LoginButton;
