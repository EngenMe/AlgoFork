import { useState } from "react";
import FormHeader from "./FormHeader";
import FormItem from "./FormItem";
import ButtonComp from "../About/ButtonComp";
import OrContinueWith from "./OrContinueWith";
import SocialMedia from "./SocialMedia";
import DontHaveAccount from "./DontHaveAccount";
import { checkUser } from "@/utils/checkUser";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await checkUser(email, password);
    console.log(res);
  };

  return (
    <form
      className="p-6 md:p-8 flex flex-col gap-6"
      onSubmit={(e) => {
        e.preventDefault();
        handleLogin();
      }}
    >
      <FormHeader />
      <FormItem
        id="email"
        type="email"
        placeholder="m@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      >
        loginEmailLabel
      </FormItem>
      <FormItem
        id="password"
        type="password"
        isContainsForgetPassword={true}
        hrefForRestorePassword="#"
        labelRestorePassword="loginForgetPassword"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      >
        loginPasswordLabel
      </FormItem>
      <ButtonComp type="submit">loginButtonTitle</ButtonComp>
      <OrContinueWith />
      <SocialMedia />
      <DontHaveAccount />
    </form>
  );
};

export default Form;
