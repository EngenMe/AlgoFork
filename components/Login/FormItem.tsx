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
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  loginFailed: boolean;
}

const FormItem = ({
  id,
  type,
  placeholder,
  children,
  isContainsForgetPassword = false,
  hrefForRestorePassword,
  labelRestorePassword,
  value,
  onChange,
  loginFailed,
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
              tabIndex={-1}
              className="ml-auto text-sm underline-offset-2 hover:underline hover:text-primary"
            >
              {t(labelRestorePassword)}
            </a>
          </div>
        )}
      </div>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        dir="ltr"
        className={loginFailed ? "border-destructive" : ""}
      />
    </div>
  );
};

export default FormItem;
