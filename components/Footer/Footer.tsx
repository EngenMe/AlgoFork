import AccordionComp from "./AccordionComp";
import FooterBottom from "./FooterBottom";
import FooterItems from "./FooterItems";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-center text-5xl font-semibold">AlgoFork</h1>
        <div className="lg:hidden">
          <AccordionComp />
        </div>
        <div className="hidden lg:block pt-10">
          <FooterItems />
        </div>
        <div className="border-t border-neutral-700 my-6" />
        <FooterBottom />
        <SocialMedia />
      </div>
    </footer>
  );
};
export default Footer;
