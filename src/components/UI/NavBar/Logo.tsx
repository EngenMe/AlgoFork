import { RiNodejsLine } from 'react-icons/ri';

const Logo = () => {
  return (
    <a href="/">
      <RiNodejsLine
        className="text-green-800 hover:scale-125 transition-all duration-300 transform"
        size={60}
      />
    </a>
  );
};

export default Logo;
