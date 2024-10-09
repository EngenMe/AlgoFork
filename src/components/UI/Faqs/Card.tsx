import { useState } from 'react';
import ExpandedBtn from './ExpandedBtn';
import ShrinkedBtn from './ShrinkedBtn';

interface Props {
  cardItems: { id: number; question: string; answer: string }[];
}

const Card = ({ cardItems }: Props) => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setExpandedCard((prev) => (prev === id ? null : id));
  };

  return (
    <div className="mt-8 space-y-8 lg:mt-12">
      {cardItems.map((item) => (
        <div
          key={item.id}
          className="p-8 bg-gray-100 rounded-lg dark:bg-gray-800"
        >
          <button
            className="flex items-center justify-between w-full"
            onClick={() => handleToggle(item.id)}
          >
            <h1 className="font-semibold text-gray-700 dark:text-white">
              {item.question}
            </h1>

            {expandedCard === item.id ? (
              <ExpandedBtn clickHandler={() => handleToggle(item.id)} />
            ) : (
              <ShrinkedBtn clickHandler={() => handleToggle(item.id)} />
            )}
          </button>
          {expandedCard === item.id && (
            <p className="mt-6 text-sm text-gray-500 dark:text-gray-300">
              {item.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Card;
