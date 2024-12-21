import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black p-20">
      <Image width={500} height={500} alt="logo" src="/logo.svg" />
    </div>
  );
}
