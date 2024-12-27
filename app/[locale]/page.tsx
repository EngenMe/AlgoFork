import About from "@/components/About/About";
import Hero from "@/components/Hero/Hero";
import Nav from "@/components/Nav/Nav";
import Partners from "@/components/Partners/Partners";
import Products from "@/components/Products/Products";

export default function HomePage() {
  return (
    <>
      <Nav />
      <Hero />
      <Partners />
      <About />
      <Products />
    </>
  );
}
