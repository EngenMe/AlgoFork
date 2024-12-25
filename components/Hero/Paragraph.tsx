import { useTranslations } from "next-intl";

const Paragraph = () => {
  const t = useTranslations();

  return (
    <p className="text-background text-center font-semibold pt-12 max-w-xl mx-auto">
      {t("heroParagraph")}
    </p>
  );
};
export default Paragraph;
