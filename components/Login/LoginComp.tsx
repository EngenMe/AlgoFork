"use client";

import { usePathname } from "next/navigation";
import { getTextDirection } from "@/utils/getTextDirection";
import CardComp from "./CardComp";
import Footer from "./Footer";

const LoginComp = () => {
  const pathname = usePathname();
  const textDir = getTextDirection(pathname);

  return (
    <div className="flex flex-col gap-10" dir={textDir}>
      <CardComp />
      <Footer />
    </div>
  );
};
export default LoginComp;
