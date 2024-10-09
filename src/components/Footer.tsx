import SubscriptionField from './UI/Footer/SubscriptionField';
import Logo from './UI/NavBar/Logo';
import { socialMediaItems } from './socialMediaItems';
import SocialMedia from './UI/NavBar/SocialMedia';
import Title from './UI/Discover/Title';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <Title />
      <div className="container px-6 py-12 mx-auto">
        <SubscriptionField />
        <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700" />
        <div className="flex items-center justify-between">
          <Logo />
          <div className="flex mx-2 mb-7">
            <SocialMedia socialMediaItems={socialMediaItems} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
