import { avatarCircles } from "@/data/avatarCircles.data";
import AvatarCircles from "../ui/avatar-circles";

const AvatarCirclesComp = () => {
  return <AvatarCircles numPeople={"1k"} avatarUrls={avatarCircles} />;
};
export default AvatarCirclesComp;
