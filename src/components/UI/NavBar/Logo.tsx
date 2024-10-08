import { RiNodejsLine } from 'react-icons/ri';

const Logo = () => {
  return (
    <a href="/">
      <RiNodejsLine
        className="text-green-800 hover:text-orange-800 transition-colors duration-500 transform"
        size={60}
      />
    </a>
  );
};

export default Logo;
