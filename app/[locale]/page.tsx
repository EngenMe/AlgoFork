import About from "@/components/About/About";
import Brand from "@/components/Brand/Brand";
import Hero from "@/components/Hero/Hero";
import Nav from "@/components/Nav/Nav";
import Partners from "@/components/Partners/Partners";
import Products from "@/components/Products/Products";
import ProgrammingLanguages from "@/components/ProgrammingLanguages/ProgrammingLanguages";

export default function HomePage() {
  return (
    <>
      <Nav />
      <Hero />
      <Partners />
      <About />
      <Products />
      <ProgrammingLanguages />
      <Brand />
    </>
  );
}
