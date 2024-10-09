import Title from './UI/Discover/Title';
import YoutubeChannel from './UI/Discover/YoutubeChannel';
import Cards from './UI/Discover/Cards';
import {
  FaProjectDiagram,
  FaDatabase,
  FaChartLine,
  FaJsSquare,
} from 'react-icons/fa';

const cardItems = [
  {
    id: 1,
    icon: FaProjectDiagram,
    title: 'Data Structure & Algorithm',
    description:
      'Master core concepts of data structures and algorithms through hands-on challenges, from sorting and searching to graph traversal and dynamic programming.',
  },
  {
    id: 2,
    icon: FaDatabase, // Use a database-related icon
    title: 'SQL',
    description:
      'Learn and practice SQL fundamentals including queries, joins, and data manipulation through interactive problem sets.',
  },
  {
    id: 3,
    icon: FaChartLine, // Use a data or chart-related icon
    title: 'Data Science',
    description:
      'Develop your data science skills by solving problems in data analysis, visualization, and statistical methods.',
  },
  {
    id: 4,
    icon: FaJsSquare, // Use a JavaScript-related icon
    title: 'JavaScript',
    description:
      'Enhance your JavaScript proficiency with hands-on exercises focusing on ES6+ syntax, asynchronous programming, and DOM manipulation.',
  },
];

const Discover = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <Title />
        <YoutubeChannel />
        <Cards cardItems={cardItems} />
      </div>
    </section>
  );
};

export default Discover;
