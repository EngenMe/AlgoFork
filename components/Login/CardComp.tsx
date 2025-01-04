import { Card, CardContent } from "@/components/ui/card";
import Form from "./Form";
import ImageComp from "./ImageComp";

const CardComp = () => {
  return (
    <Card className="overflow-hidden shadow-md">
      <CardContent className="grid p-0 md:grid-cols-2">
        <Form />
        <ImageComp />
      </CardContent>
    </Card>
  );
};
export default CardComp;
