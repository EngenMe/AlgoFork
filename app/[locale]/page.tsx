import About from "@/components/About/About";
import Hero from "@/components/Hero/Hero";
import Nav from "@/components/Nav/Nav";
import Partners from "@/components/Partners/Partners";
import Products from "@/components/Products/Products";
import ProgrammingLanguages from "@/components/ProgrammingLanguages/ProgrammingLanguages";
import Footer from "@/components/Footer/Footer";
import GetStarted from "@/components/GetStarted/GetStarted";

export default function HomePage() {
  return (
    <div className="animate-blur-in">
      <Nav />
      <Hero />
      <Partners />
      <About />
      <Products />
      <ProgrammingLanguages />
      <GetStarted />
      <Footer />
    </div>
  );
}
