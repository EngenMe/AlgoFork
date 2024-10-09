import { IconType } from 'react-icons';

interface Props {
  cardItems: { icon: IconType; title: string; description: string }[];
}

const Cards = ({ cardItems }: Props) => {
  return (
    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2">
      {cardItems.map((item) => (
        <a href="/">
          <div className="p-6 border rounded-xl border-r-gray-200 dark:border-gray-700 transition-transform transform hover:scale-105 hover:shadow-lg hover:border-blue-500 md:h-[280px] lg:h-[200px] xl:h-[180px] overflow-hidden">
            <div className="md:flex md:items-start md:-mx-4">
              <>
                <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                  {<item.icon />}
                </span>
                <div className="mt-4 md:mx-4 md:mt-0">
                  <h1 className="text-xl font-medium text-gray-700 capitalize dark:text-white">
                    {item.title}
                  </h1>
                  <p className="mt-3 text-gray-500 dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
              </>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Cards;
