import { useState } from "react";
import FormHeader from "./FormHeader";
import FormItem from "./FormItem";
import ButtonComp from "../About/ButtonComp";
import OrContinueWith from "./OrContinueWith";
import SocialMedia from "./SocialMedia";
import DontHaveAccount from "./DontHaveAccount";
import { manageLogin } from "@/utils/manageLogin";
import ErrorMessage from "../Hero/ErrorMessage";
import { useRouter } from "next/navigation";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginFailed, setLoginFailed] = useState(false);
  const router = useRouter();

  return (
    <form
      className="p-6 md:p-8 flex flex-col gap-6"
      onSubmit={(e) => {
        e.preventDefault();
        manageLogin(email, password, setLoginFailed, router);
      }}
    >
      <FormHeader />
      <FormItem
        id="email"
        type="email"
        placeholder="m@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        loginFailed={loginFailed}
      >
        loginEmailLabel
      </FormItem>
      <div>
        <FormItem
          id="password"
          type="password"
          isContainsForgetPassword={true}
          hrefForRestorePassword="#"
          labelRestorePassword="loginForgetPassword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          loginFailed={loginFailed}
        >
          loginPasswordLabel
        </FormItem>
        {loginFailed && <ErrorMessage>invalidPasswordOrEmail</ErrorMessage>}
      </div>
      <ButtonComp type="submit">loginButtonTitle</ButtonComp>
      <OrContinueWith />
      <SocialMedia />
      <DontHaveAccount />
    </form>
  );
};

export default Form;
