import AiCard from "./AiCard";
import BgIcons from "./BgIcons";
import Header from "./Header";
import Paragraph from "./Paragraph";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary to-secondary px-6 overflow-hidden">
      <BgIcons />

      <div className="relative z-10">
        <Header />
        <Paragraph />
        <div className="py-20 flex justify-center items-center">
          <AiCard />
        </div>
      </div>
    </section>
  );
};

export default Hero;
