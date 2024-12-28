"use client";

import { useEffect, useState } from "react";
import IconCloud from "../ui/icon-cloud";
import { ProgrammingLanguagesSlugs } from "@/data/programmingLanguagesSlugs.data";

const IconCloudComp = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden px-20 pb-20 pt-8">
      <IconCloud iconSlugs={ProgrammingLanguagesSlugs} />
    </div>
  );
};

export default IconCloudComp;
