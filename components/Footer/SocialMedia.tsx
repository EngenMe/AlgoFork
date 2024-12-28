import { socialMediaFooters } from "@/data/socialMediaFooters.data";

const SocialMedia = () => {
  return (
    <div className="flex justify-center mt-10 space-x-6">
      {socialMediaFooters.map((item, index) => (
        <a
          key={index}
          href={item.href}
          className="hover:scale-125 transition-transform"
        >
          <item.icon className="w-6 h-6" style={{ color: item.hex }} />
        </a>
      ))}
    </div>
  );
};
export default SocialMedia;
