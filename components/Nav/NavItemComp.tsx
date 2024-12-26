"use client";

import { NavItem } from "@/interfaces/NavItem.interface";
import Link from "next/link";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { getTextDirection } from "@/utils/getTextDirection";

const NavItemComp = (item: NavItem) => {
  const pathname = usePathname();

  return (
    <Link href={item.link} className="w-full flex justify-center items-center">
      <Button
        dir={getTextDirection(pathname)}
        className="text-sm font-semibold w-3/4 shadow-lg lg:bg-transparent lg:shadow-transparent lg:hover:bg-transparent lg:hover:text-foreground"
      >
        {item.title}
      </Button>
    </Link>
  );
};
export default NavItemComp;
