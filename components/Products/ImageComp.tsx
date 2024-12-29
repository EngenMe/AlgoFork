"use client";

import { useState } from "react";
import Image from "next/image";
import ImageBackground from "./ImageBackground";
import { Skeleton } from "@/components/ui/skeleton";

interface Props {
  title: string;
  image: string;
  index: number;
}

const ImageComp = ({ title, image, index }: Props) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative bg-gradient-to-r from-primary to-secondary flex justify-center items-end h-full pt-8 pb-0 lg:bg-none">
      <ImageBackground index={index} />

      <div className="relative w-72 h-64">
        {/* Skeleton Placeholder */}
        {isLoading && (
          <Skeleton className="absolute bg-muted-foreground inset-0 w-full h-full rounded-t-md animate-blur-pulse" />
        )}

        {/* Actual Image */}
        <Image
          width={100}
          height={100}
          alt={title}
          src={image}
          className={`w-full h-full rounded-t-md z-10 transition-opacity duration-500 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          onLoadingComplete={() => setIsLoading(false)}
        />
      </div>
    </div>
  );
};

export default ImageComp;
