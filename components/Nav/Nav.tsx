import Link from "next/link";
import Logo from "./Logo";
import SheetComponent from "./SheetComponent";
import NavList from "./NavList";
import LoginButton from "./LoginButton";
import SignUpButton from "./SignUpButton";
import LanguageSwitcherComp from "./LanguageSwitcherComp";

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
        <div className="hidden lg:flex lg:gap-5">
          <SignUpButton />
          <LoginButton />
        </div>
      </div>
      <LanguageSwitcherComp />
      <div className="lg:hidden">
        <SheetComponent />
      </div>
    </section>
  );
};
export default Nav;