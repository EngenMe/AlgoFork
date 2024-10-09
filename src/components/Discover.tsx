import Title from './UI/Discover/Title';
import YoutubeChannel from './UI/Discover/YoutubeChannel';

const Discover = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <Title />
        <div className="w-full mt-12 h-64 md:h-[450px] rounded-xl overflow-hidden bg-gradient-to-r from-red-500 to-red-700 flex items-center justify-center relative">
          <a href="https://www.youtube.com/@AlgoFork" target="_blank">
            <YoutubeChannel />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Discover;
