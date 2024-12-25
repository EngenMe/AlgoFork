"use client";

import { useTranslations } from "next-intl";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../ui/card";
import { Textarea } from "../ui/textarea";
import ShinyButtonComp from "./ShinyButtonComp";
import { usePathname } from "next/navigation";

const AiCard = () => {
  const t = useTranslations();

  const pathname = usePathname();
  const isArabic = pathname.includes("/ar");
  const textDirection = isArabic ? "rtl" : "ltr";

  return (
    <Card
      className={`w-full md:w-3/4 lg:w-1/3 shadow-2xl ${
        isArabic ? "text-right" : "text-left"
      }`}
    >
      <CardHeader>
        <CardTitle
          className="text-base font-bold text-primary"
          dir={textDirection}
        >
          {t("aiCardTitle")}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Textarea
          placeholder={t("aiCardPlaceholder")}
          className="placeholder:text-xs placeholder:text-muted-foreground shadow-md"
          dir={textDirection}
        />
      </CardContent>
      <CardFooter className="flex flex-col gap-4">
        <ShinyButtonComp />
        <p className="text-xs text-muted-foreground" dir={textDirection}>
          {t("aiCardFooter")}
        </p>
      </CardFooter>
    </Card>
  );
};
export default AiCard;
