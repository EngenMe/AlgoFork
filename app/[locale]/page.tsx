import About from "@/components/About/About";
import GetStarted from "@/components/GetStarted/GetStarted";
import Hero from "@/components/Hero/Hero";
import Nav from "@/components/Nav/Nav";
import Partners from "@/components/Partners/Partners";
import Products from "@/components/Products/Products";
import ProgrammingLanguages from "@/components/ProgrammingLanguages/ProgrammingLanguages";
import Footer from "@/components/Footer/Footer";

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
  ); //TODO: Build sing in and sing up functionality
}
