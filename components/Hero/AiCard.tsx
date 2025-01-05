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
import ErrorMessage from "./ErrorMessage";

const AiCard = () => {
  const t = useTranslations();
  const pathname = usePathname();

  const textDirection = getTextDirection(pathname);

  const [textareaValue, setTextareaValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleButtonClick = () => {
    if (!textareaValue.trim()) {
      setErrorMessage("pleaseFillOut");
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
          {t("getStarted")}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Textarea
          placeholder={t("list10Frontend")}
          className="placeholder:text-xs placeholder:text-muted-foreground shadow-md"
          dir={textDirection}
          value={textareaValue}
          onChange={(e) => setTextareaValue(e.target.value)}
        />
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </CardContent>
      <CardFooter onClick={handleButtonClick} className="flex flex-col gap-4">
        <ShinyButtonComp />
        <p className="text-xs text-muted-foreground" dir={textDirection}>
          {t("poweredWithAi")}
        </p>
      </CardFooter>
    </Card>
  );
};
export default AiCard;
