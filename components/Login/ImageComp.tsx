import { useState } from "react";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

const ImageComp = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative hidden bg-muted md:block">
      {isLoading && (
        <Skeleton className="absolute inset-0 h-full w-full bg-muted-foreground animate-blur-pulse" />
      )}
      <Image
        width={10000}
        height={10000}
        src="/auth/loginImage.webp"
        alt="Image"
        className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};

export default ImageComp;
