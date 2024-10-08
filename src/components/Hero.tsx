import AdobeLogo from './UI/Hero/AdobeLogo';
import AmazonLogo from './UI/Hero/AmazonLogo';
import FacebookLogo from './UI/Hero/FacebookLogo';
import Input from './UI/Hero/Input';
import SubTitle from './UI/Hero/SubTitle';
import TeslaLogo from './UI/Hero/TeslaLogo';
import Title from './UI/Hero/Title';

const Hero = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-16 mx-auto text-center">
        <div className="max-w-lg mx-auto">
          <Title />

          <SubTitle />

          <div className="w-full max-w-sm mx-auto mt-6 bg-transparent border rounded-md dark:border-gray-700 focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 dark:focus-within:border-blue-300 focus-within:ring-opacity-40">
            <Input />
          </div>
        </div>

        <div className="max-w-screen-xl mx-auto mt-20">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-4">
            <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
              <FacebookLogo />
            </div>

            <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
              <AmazonLogo />
            </div>

            <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
              <TeslaLogo />
            </div>

            <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
              <AdobeLogo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
