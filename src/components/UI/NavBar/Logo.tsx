import { RiNodejsLine } from 'react-icons/ri';

const Logo = () => {
  return (
    <a href="/">
      <RiNodejsLine
        className="text-secondary hover:text-accent transition-colors duration-500 transform"
        size={60}
      />
    </a>
  );
};

export default Logo;
