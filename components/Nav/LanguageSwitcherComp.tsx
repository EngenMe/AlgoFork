"use client";

import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { switcherLanguages } from "@/data/switcherLanguages.data";
import { Button } from "../ui/button";
import { useRouter, usePathname } from "next/navigation";

const LanguageSwitcherComp = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [selectedLanguage, setSelectedLanguage] = useState("ar");

  useEffect(() => {
    const urlLang = pathname.split("/")[1];
    if (switcherLanguages.some((lang) => lang.code === urlLang)) {
      setSelectedLanguage(urlLang);
    }
  }, [pathname]);

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);

    const newPathname = `/${language}${pathname.substring(3)}`;
    router.push(newPathname);
  };

  const currentLanguage = switcherLanguages.find(
    (lang) => lang.code === selectedLanguage
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="border w-auto h-auto px-2 py-1"
          style={{
            outline: "none",
            boxShadow: "none",
          }}
        >
          <div className="text-xs font-medium flex gap-1 justify-center items-center">
            <div>{currentLanguage?.flag}</div>
            <div>
              {currentLanguage?.code === "ar" ? "عربي" : currentLanguage?.code}
            </div>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-auto">
        {switcherLanguages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
          >
            <div>{lang.flag}</div>
            <div>{lang.code === "ar" ? "عربي" : lang.code}</div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcherComp;
