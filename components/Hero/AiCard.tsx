import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../ui/card";
import { Textarea } from "../ui/textarea";
import ShinyButtonComp from "./ShinyButtonComp";

const AiCard = () => {
  return (
    <Card className="w-full md:w-3/4 lg:w-1/3 shadow-2xl">
      <CardHeader>
        <CardTitle className="text-base font-bold text-primary">
          Get Started
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Textarea
          placeholder="List 10 frontend interview questions to practice..."
          className="placeholder:text-xs placeholder:text-muted-foreground shadow-md"
        />
      </CardContent>
      <CardFooter className="flex flex-col gap-4">
        <ShinyButtonComp />
        <p className="text-xs text-muted-foreground">Powered with AI</p>
      </CardFooter>
    </Card>
  );
};
export default AiCard;
