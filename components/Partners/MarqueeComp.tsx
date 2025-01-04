"use client";

import { useState } from "react";
import { partners } from "@/data/partners.data";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

const MarqueeComp = () => {
  const [loadingStates, setLoadingStates] = useState<boolean[]>(
    new Array(partners.length).fill(true)
  );

  const handleImageLoad = (index: number) => {
    setLoadingStates((prev) => {
      const newStates = [...prev];
      newStates[index] = false;
      return newStates;
    });
  };

  return (
    <Marquee speed={50} pauseOnHover={true} gradient={false} className="pt-10">
      {partners.map((partner, index) => (
        <Link
          key={index}
          href={partner.link}
          target="_blank"
          className="flex items-center justify-center mx-5 md:mx-10 lg:mx-20"
        >
          <div className="relative w-40 lg:w-72 h-auto flex justify-center items-center">
            {/* Skeleton Placeholder */}
            {loadingStates[index] && (
              <Skeleton className="absolute bg-muted-foreground w-full h-full rounded-md animate-blur-pulse" />
            )}

            {/* Partner Logo */}
            <Image
              src={partner.logo}
              alt={partner.name}
              width={1000}
              height={1000}
              className={`w-full h-auto object-contain transition-opacity duration-500 ${
                loadingStates[index] ? "opacity-0" : "opacity-100"
              }`}
              onLoadingComplete={() => handleImageLoad(index)}
            />
          </div>
        </Link>
      ))}
    </Marquee>
  );
};

export default MarqueeComp;
