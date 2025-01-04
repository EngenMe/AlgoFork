import { useTranslations } from "next-intl";
import { Label } from "../ui/label";

interface Props {
  children: string;
  htmlFor: string;
}

const LabelComp = ({ children, htmlFor }: Props) => {
  const t = useTranslations();

  return <Label htmlFor={htmlFor}>{t(children)}</Label>;
};
export default LabelComp;
