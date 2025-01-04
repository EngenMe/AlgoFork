import SocialMediaItem from "./SocialMediaItem";
import { loginSocialMedia } from "@/data/loginSocialMedia.data";

const SocialMedia = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {loginSocialMedia.map((item, index) => (
        <SocialMediaItem
          key={index}
          icon={item.icon}
          hex={item.hex}
          href={item.href}
        />
      ))}
    </div>
  );
};
export default SocialMedia;
