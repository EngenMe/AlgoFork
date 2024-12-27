import Image from "next/image";
import ImageBackground from "./ImageBackground";

interface Props {
  title: string;
  image: string;
  index: number;
}

const ImageComp = ({ title, image, index }: Props) => {
  return (
    <div className="relative bg-gradient-to-r from-primary to-secondary flex justify-center items-end h-full pt-8 pb-0 lg:bg-none">
      <ImageBackground index={index} />
      <Image
        width={100}
        height={100}
        alt={title}
        src={image}
        className="w-72 h-64 rounded-t-md z-10"
      />
    </div>
  );
};
export default ImageComp;
