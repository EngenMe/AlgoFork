import Header from "../Partners/Header";
import ButtonComp from "./ButtonComp";
import Paragraph from "./Paragraph";

const About = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-8 pb-10 pt-10">
      <Header>aboutHeader</Header>
      <Paragraph classname="px-4 md:px-10 lg:w-3/5 text-center">
        aboutParagraph
      </Paragraph>
      <div className="pt-5 w-full flex flex-col justify-center items-center">
        <ButtonComp classname="w-3/4 lg:w-3/12">aboutButtonTitle</ButtonComp>
      </div>
    </section>
  );
};
export default About;
