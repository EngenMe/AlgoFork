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
import { usePathname } from "next/navigation";
import ShinyButtonComp from "./ShinyButtonComp";
import { useState } from "react";
import { getTextDirection } from "@/utils/getTextDirection";

const AiCard = () => {
  const t = useTranslations();
  const pathname = usePathname();

  const textDirection = getTextDirection(pathname);

  const [textareaValue, setTextareaValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleButtonClick = () => {
    if (!textareaValue.trim()) {
      setErrorMessage(t("aiCardError"));
    } else {
      setErrorMessage("");
    }
  };

  return (
    <Card
      className={`w-full md:w-3/4 lg:w-1/3 shadow-2xl ${
        textDirection === "rtl" ? "text-right" : "text-left"
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
          value={textareaValue}
          onChange={(e) => setTextareaValue(e.target.value)}
        />
        {errorMessage && (
          <p className="text-xs text-destructive mt-2" dir={textDirection}>
            {errorMessage}
          </p>
        )}
      </CardContent>
      <CardFooter onClick={handleButtonClick} className="flex flex-col gap-4">
        <ShinyButtonComp />
        <p className="text-xs text-muted-foreground" dir={textDirection}>
          {t("aiCardFooter")}
        </p>
      </CardFooter>
    </Card>
  );
};
export default AiCard;
