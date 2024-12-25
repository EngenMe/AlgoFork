import AiCard from "./AiCard";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-secondary px-6">
      <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-center pt-12 text-background">
        <span className="inline-block mb-3">Don&apos;t just code,</span>
        <br />
        <span className="inline-block mt-3">Build.</span>
      </h1>
      <p className="text-background text-center font-semibold pt-12 max-w-xl mx-auto">
        Unlock Your Coding Potential with Brand Name and become a part of
        developer&apos;s community.
      </p>
      <div className="py-20 flex justify-center items-center">
        <AiCard />
      </div>
    </section>
  );
};
export default Hero;
