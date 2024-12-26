import { partners } from "@/data/partners.data";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const MarqueeComp = () => {
  return (
    <Marquee speed={50} pauseOnHover={true} gradient={false} className="pt-10">
      {partners.map((partner, index) => (
        <Link
          key={index}
          href={partner.link}
          target="_blank"
          className="flex items-center justify-center mx-5 md:mx-10 lg:mx-20"
        >
          <Image
            src={partner.logo}
            alt={partner.name}
            width={100}
            height={100}
            className="w-40 lg:w-72 h-auto object-contain"
          />
        </Link>
      ))}
    </Marquee>
  );
};
export default MarqueeComp;
