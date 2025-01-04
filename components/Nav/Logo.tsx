"use client";

import { useState } from "react";
import Image from "next/image";
import { Skeleton } from "../ui/skeleton";

const Logo = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-10 h-10">
      {isLoading && (
        <Skeleton className="absolute inset-0 w-full h-full rounded-full animate-blur-pulse" />
      )}

      <Image
        width={1000}
        height={1000}
        alt="AlgoFork logo"
        src="/logo.svg"
        onLoadingComplete={() => setIsLoading(false)}
        className={`${
          isLoading ? "opacity-0" : "opacity-100"
        } transition-opacity duration-500`}
      />
    </div>
  );
};

export default Logo;
