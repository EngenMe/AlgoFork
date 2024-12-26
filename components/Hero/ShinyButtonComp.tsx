import { WandSparkles } from "lucide-react";
import ShinyButton from "../ui/shiny-button";
import { useTranslations } from "next-intl";

const ShinyButtonComp = () => {
  const t = useTranslations();

  return (
    <ShinyButton className="w-full shadow-lg bg-input">
      <p className="text-primary text-xs font-bold h-7 flex justify-center items-center gap-2">
        <WandSparkles className="w-5 h-5" />
        {t("aiCardButtonTitle")}
      </p>
    </ShinyButton>
  );
};
export default ShinyButtonComp;
