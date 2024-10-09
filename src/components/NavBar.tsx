import { useState } from 'react';
import Logo from './UI/NavBar/Logo';
import MenuButton from './UI/NavBar/MenuButton';
import MenuItems from './UI/NavBar/MenuItems';
import SocialMedia from './UI/NavBar/SocialMedia';
import LoginButton from './UI/NavBar/LoginButton';
import { socialMediaItems } from './socialMediaItems';

const menuItems = [
  { id: 1, name: 'HOME', link: '/' },
  { id: 2, name: 'DISCOVER', link: '/' },
  { id: 3, name: 'TOP HACKS', link: '/' },
  { id: 4, name: 'BLOGS', link: '/' },
  { id: 5, name: 'ABOUT', link: '/' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow dark:bg-gray-800">
      <div className="container px-6 py-4 mx-auto">
        <div className="lg:flex lg:items-center">
          <div className="flex items-center justify-between">
            <Logo />

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
          </div>

          {/* Menu */}
          <div
            className={`absolute inset-x-0 z-20 flex-1 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center lg:justify-between ${
              isOpen
                ? 'translate-x-0 opacity-100'
                : 'opacity-0 -translate-x-full'
            }`}
          >
            <div className="flex flex-col text-gray-600 capitalize dark:text-gray-300 lg:flex lg:px-16 lg:-mx-4 lg:flex-row lg:items-center">
              <MenuItems menuItems={menuItems} />
              <LoginButton />
            </div>

            {/* Social Links */}
            <SocialMedia socialMediaItems={socialMediaItems} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
