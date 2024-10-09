import codeOnScreen from '../assets/codeOnScreen.avif';

const About = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl text-center font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
          About AlgoFork
        </h1>
        <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
          <img
            className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-100 lg:h-96"
            src={codeOnScreen}
            alt="picture of code written on screen."
          />
          <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
            <p className="block mt-4 text-2xl font-semibold text-gray-800 dark:text-white">
              All the Coding Skills You Need to Know, in One Place
            </p>

            <p className="mt-3 text-base text-gray-500 dark:text-gray-300 md:text-lg">
              AlgoFork offers a unique problem-solving experience. If you want
              to understand when and why to use data structures and algorithms,
              this is the right place. We provide real-world challenges to help
              you apply these concepts in your development journey.
            </p>

            <a
              href="/"
              className="inline-block mt-2 text-blue-500 underline hover:text-blue-400"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
