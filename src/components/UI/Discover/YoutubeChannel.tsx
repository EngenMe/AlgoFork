import { FaYoutube } from 'react-icons/fa';

const YoutubeChannel = () => {
  return (
    <div className="text-center text-white transition-transform transform hover:scale-105 hover:text-red-300">
      <FaYoutube className="text-6xl md:text-8xl mb-4 transition-transform transform hover:scale-110" />{' '}
      {/* YouTube logo */}
      <h2 className="text-2xl md:text-4xl font-bold">YouTube Channel</h2>
      <p className="text-lg md:text-2xl mt-2">Coming Soon</p>
    </div>
  );
};

export default YoutubeChannel;
