import FormHeader from "./FormHeader";
import FormItem from "./FormItem";
import ButtonComp from "../About/ButtonComp";
import OrContinueWith from "./OrContinueWith";
import SocialMedia from "./SocialMedia";
import DontHaveAccount from "./DontHaveAccount";

const Form = () => {
  return (
    <form className="p-6 md:p-8 flex flex-col gap-6">
      <FormHeader />
      <FormItem id="email" type="email" placeholder="m@example.com">
        loginEmailLabel
      </FormItem>
      <FormItem
        id="password"
        type="password"
        isContainsForgetPassword={true}
        hrefForRestorePassword="#"
        labelRestorePassword="loginForgetPassword"
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
