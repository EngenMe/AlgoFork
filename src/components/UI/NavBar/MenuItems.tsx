interface Props {
  menuItems: { id: number; name: string; link: string }[];
}

const MenuItems = ({ menuItems }: Props) => {
  return (
    <>
      {menuItems.map((item) => (
        <a
          key={item.id}
          href={item.link}
          className="mt-2 font-bold transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-orange-300 dark:hover:text-orange-300"
        >
          {item.name}
        </a>
      ))}
    </>
  );
};

export default MenuItems;
