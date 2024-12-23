import Link from "next/link";
import Logo from "./Logo";
import SheetComponent from "./SheetComponent";
import ThemeSwitcher from "./ThemeSwitcher";
import NavList from "./NavList";
import LoginButton from "./LoginButton";
import SignUpButton from "./SignUpButton";

const Nav = () => {
  return (
    <div className="px-4 py-2 w-full flex justify-between items-center bg-gradient-to-r from-primary to-secondary shadow-2xl">
      <Link href="/">
        <Logo />
      </Link>
      <div className="hidden lg:block">
        <NavList />
      </div>
      <div className="lg:flex lg:gap-5">
        <div className="hidden lg:flex lg:gap-5 absolute right-20">
          <LoginButton />
          <SignUpButton />
        </div>
        <ThemeSwitcher />
      </div>
      <div className="lg:hidden">
        <SheetComponent />
      </div>
    </div>
  );
};
export default Nav;
