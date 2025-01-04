import { Menu } from "lucide-react";
import {
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  Sheet,
  SheetFooter,
} from "../ui/sheet";
import NavList from "./NavList";
import Footer from "./Footer";
import LoginButton from "./LoginButton";

const SheetComponent = () => {
  return (
    <Sheet>
      <SheetTrigger className="rounded-md shadow-xl">
        <Menu className="text-background" />
      </SheetTrigger>
      <SheetContent className="flex flex-col h-full bg-gradient-to-b from-secondary to-primary border-0 shadow-lg">
        <div className="flex-grow">
          <SheetHeader>
            <SheetTitle />
          </SheetHeader>
          <NavList />
          <div className="flex flex-col gap-4 pt-10">
            <LoginButton />
          </div>
        </div>
        <SheetFooter>
          <Footer />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
export default SheetComponent;
