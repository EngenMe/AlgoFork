"use client";

import { useTranslations } from "next-intl";
import Header from "../Partners/Header";
import { Button } from "../ui/button";
import AvatarCirclesComp from "./AvatarCirclesComp";
import { usePathname } from "next/navigation";
import { getTextDirection } from "@/utils/getTextDirection";

const GetStarted = () => {
  const t = useTranslations();
  const pathname = usePathname();

  return (
    <div className="flex flex-col justify-center items-center gap-10 px-2 py-20 bg-gradient-to-r from-primary to-secondary">
      <Header classname="text-center text-background">joinAlgoForkAnd</Header>
      <Button
        variant="outline"
        dir={getTextDirection(pathname)}
        className="text-xl w-3/4 lg:w-1/4 py-6 font-semibold shadow-xl hover:shadow-md transition-opacity"
      >
        {t("SignUpNow")}
      </Button>
      <AvatarCirclesComp />
    </div>
  );
};
export default GetStarted;
