import Link from "next/link";
import Logo from "./Logo";
import SheetComponent from "./SheetComponent";
import NavList from "./NavList";
import LanguageSwitcherComp from "./LanguageSwitcherComp";
import LoginComp from "./LoginComp";

const Nav = () => {
  return (
    <section className="px-6 py-2 w-full h-20 flex justify-between items-center bg-gradient-to-r from-primary to-secondary shadow-xl z-10 relative">
      <Link href="/" target="_parent">
        <Logo />
      </Link>
      <div className="hidden lg:flex gap-10">
        <NavList />
        <LanguageSwitcherComp />
      </div>
      <div className="hidden lg:flex lg:gap-5">
        <LoginComp />
      </div>
      <div className="lg:hidden">
        <LanguageSwitcherComp />
      </div>
      <div className="lg:hidden">
        <SheetComponent />
      </div>
    </section>
  );
};
export default Nav;
