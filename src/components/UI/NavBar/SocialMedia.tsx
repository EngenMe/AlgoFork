import { IconType } from 'react-icons';

interface Props {
  socialMediaItems: {
    id: number;
    ariaLabel: string;
    icon: IconType;
    link: string;
  }[];
}

const SocialMedia = ({ socialMediaItems }: Props) => {
  return (
    <div className="flex justify-center mt-6 lg:flex lg:mt-0 lg:-mx-2">
      {socialMediaItems.map((item) => (
        <a
          key={item.id}
          href={item.link}
          className="mx-4 text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:text-orange-300 dark:hover:text-orange-300"
          aria-label={item.ariaLabel}
        >
          {<item.icon className="size-6" />}
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
