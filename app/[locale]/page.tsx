import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const t = useTranslations();
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{t("hello")}</h1>
      <p className="mb-6">{t("welcome")}</p>

      <Button variant="default">{t("hello")}</Button>
    </div>
  );
};
export default page;
