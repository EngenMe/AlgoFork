"use client";

import Link from "next/link";
import ButtonComp from "../About/ButtonComp";
import { usePathname } from "next/navigation";
import { getTextDirection } from "@/utils/getTextDirection";
import { cn } from "@/lib/utils";

interface Props {
  buttonRedirectTo: string;
  buttonTitle: string;
}

const ProductsButtonComp = ({ buttonRedirectTo, buttonTitle }: Props) => {
  const pathname = usePathname();
  const textDirection = getTextDirection(pathname);

  return (
    <Link
      href={buttonRedirectTo}
      className={cn(
        textDirection === "rtl" ? "lg:justify-end" : "lg:justify-start",
        "flex justify-center items-start pt-8 px-10"
      )}
    >
      <ButtonComp classname="w-11/12 lg:w-auto">{buttonTitle}</ButtonComp>
    </Link>
  );
};
export default ProductsButtonComp;
