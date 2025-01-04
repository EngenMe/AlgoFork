import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { IconType } from "react-icons";

interface Props {
  icon: IconType;
  hex: string;
  href: string;
}

const SocialMediaItem = ({ icon: Icon, hex, href }: Props) => {
  const router = useRouter();

  return (
    <Button
      variant="outline"
      type="button"
      onClick={() => router.push(href)}
      className="w-full shadow-md hover:shadow-sm transition-all"
    >
      <Icon className={`text-[${hex}]`} />
    </Button>
  );
};
export default SocialMediaItem;
