import Header from "../Partners/Header";
import { Button } from "../ui/button";
import AvatarCirclesComp from "./AvatarCirclesComp";

const GetStarted = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 px-2 py-20 bg-gradient-to-r from-primary to-secondary">
      <Header classname="text-center text-background">getStartedTitle</Header>
      <Button>Sign Up Now</Button>
      <AvatarCirclesComp />
    </div>
  );
};
export default GetStarted;
