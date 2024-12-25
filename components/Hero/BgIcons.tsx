import Image from "next/image";

const BgIcons = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Image
        width={50}
        height={50}
        src="/js.svg"
        alt="JavaScript"
        className="absolute top-2 left-10 lg:left-48 w-14 h-14 lg:w-32 lg:h-32 animate-bounce-slow opacity-40 lg:opacity-100"
      />
      <Image
        width={50}
        height={50}
        src="/java.svg"
        alt="Java"
        className="absolute top-24 right-14 lg:left-64 lg:top-auto lg:bottom-24 w-20 h-20 lg:w-52 lg:h-52 animate-bounce-slow opacity-40 lg:opacity-100"
      />
      <Image
        width={50}
        height={50}
        src="/python.svg"
        alt="Python"
        className="absolute top-32 lg:top-72 left-12 lg:left-auto lg:right-16 w-20 h-20 lg:w-52 lg:h-52 animate-bounce-slow opacity-40 lg:opacity-100"
      />
      <Image
        width={50}
        height={50}
        src="/c.svg"
        alt="C"
        className="absolute top-64 lg:top-auto lg:bottom-64 right-12 lg:right-auto lg:left-20 w-14 h-14 lg:w-16 lg:h-16 animate-bounce-slow opacity-40 lg:opacity-100"
      />
      <Image
        width={50}
        height={50}
        src="/r.svg"
        alt="R"
        className="absolute top-72 lg:top-auto lg:bottom-44 left-12 lg:left-auto lg:right-80 w-16 h-20 lg:w-28 lg:h-28 animate-bounce-slow opacity-40 lg:opacity-100"
      />
      <Image
        width={50}
        height={50}
        src="/swift.svg"
        alt="Swift"
        className="absolute bottom-2 lg:bottom-auto lg:top-28 right-12 lg:right-72 w-14 h-14 lg:w-20 lg:h-20 animate-bounce-slow opacity-40 lg:opacity-100"
      />
    </div>
  );
};
export default BgIcons;
