import Header from "../Partners/Header";
import Paragraph from "../About/Paragraph";

const FormHeader = () => {
  return (
    <div className="flex flex-col gap-2 items-center text-center">
      <Header>loginTitle</Header>
      <Paragraph>loginSubTitle</Paragraph>
    </div>
  );
};
export default FormHeader;
