import { FaYoutube } from 'react-icons/fa';

const YoutubeChannel = () => {
  return (
    <div className="w-full mt-12 h-64 md:h-[450px] rounded-xl overflow-hidden bg-gradient-to-r from-red-500 to-red-700 flex items-center justify-center relative">
      <a href="https://www.youtube.com/@AlgoFork" target="_blank">
        <div className="text-center text-white transition-transform transform hover:scale-105 hover:text-red-300">
          <FaYoutube className="text-6xl md:text-8xl mb-4 transition-transform transform hover:scale-110" />{' '}
          {/* YouTube logo */}
          <h2 className="text-2xl md:text-4xl font-bold">YouTube Channel</h2>
          <p className="text-lg md:text-2xl mt-2">Coming Soon</p>
        </div>
      </a>
    </div>
  );
};

export default YoutubeChannel;
