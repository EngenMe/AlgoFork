import { getTextDirection } from "@/utils/getTextDirection";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

interface Props {
  children: string;
}

const ErrorMessage = ({ children }: Props) => {
  const t = useTranslations();
  const pathname = usePathname();
  const textDir = getTextDirection(pathname);

  return (
    <p className="text-xs text-destructive mt-2" dir={textDir}>
      {t(children)}
    </p>
  );
};
export default ErrorMessage;
