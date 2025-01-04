import { useTranslations } from "next-intl";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { HTMLInputTypeAttribute } from "react";

interface Props {
  id: string;
  type: HTMLInputTypeAttribute;
  placeholder?: string;
  children: string;
  isContainsForgetPassword?: boolean;
  hrefForRestorePassword?: string;
  labelRestorePassword?: string;
}

const FormItem = ({
  id,
  type,
  placeholder,
  children,
  isContainsForgetPassword = false,
  hrefForRestorePassword,
  labelRestorePassword,
}: Props) => {
  const t = useTranslations();

  return (
    <div className="grid gap-3">
      <div className="flex items-center justify-between">
        <Label htmlFor={id}>{t(children)}</Label>
        {isContainsForgetPassword && (
          <div>
            <a
              href={hrefForRestorePassword}
              className="ml-auto text-sm underline-offset-2 hover:underline hover:text-primary"
            >
              {t(labelRestorePassword)}
            </a>
          </div>
        )}
      </div>
      <Input id={id} type={type} placeholder={placeholder} required dir="ltr" />
    </div>
  );
};
export default FormItem;
