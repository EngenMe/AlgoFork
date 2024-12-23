import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations();

  return (
    <div>
      <h1 className="text-muted-foreground">{t("hello")}</h1>
      <h2 className="text-input">{t("welcome")}</h2>
    </div>
  );
}
