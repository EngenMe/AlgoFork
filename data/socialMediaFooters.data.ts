import { SocialMediaFooter } from "@/interfaces/SocialMediaFooter.interface";
import { FaFacebook, FaLinkedin, FaInstagram, FaReddit } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export const socialMediaFooters: SocialMediaFooter[] = [
  { icon: FaFacebook, href: "#", hex: "#1877F2" },
  { icon: FaLinkedin, href: "#", hex: "#0A66C2" },
  { icon: FaInstagram, href: "#", hex: "#E1306C" },
  { icon: FaSquareXTwitter, href: "#", hex: "#ffffff" },
  { icon: FaReddit, href: "#", hex: "#FF4500" },
];
