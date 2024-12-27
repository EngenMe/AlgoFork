import Paragraph from "../About/Paragraph";
import Header from "../Partners/Header";

interface Props {
  title: string;
  paragraph: string;
  buttonTitle: string;
  buttonRedirectTo: string;
}

const Description = ({ title, paragraph }: Props) => {
  return (
    <div className="flex flex-col gap-8 px-4 md:px-10">
      <Header classname="text-center lg:text-start">{title}</Header>
      <Paragraph classname="text-center lg:text-start">{paragraph}</Paragraph>
    </div>
  );
};
export default Description;
