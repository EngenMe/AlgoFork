import { WandSparkles } from "lucide-react";
import { Button } from "../ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../ui/card";
import { Textarea } from "../ui/textarea";

const AiCard = () => {
  return (
    <Card className="w-full md:w-3/4 lg:w-1/2 shadow-lg">
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
        <Button className="flex gap-2 w-full bg-gradient-to-r from-primary to-secondary">
          <WandSparkles />
          Generate
        </Button>
        <p className="text-xs">Powered with AI</p>
      </CardFooter>
    </Card>
  );
};
export default AiCard;
