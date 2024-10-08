const Input = () => {
  return (
    <form className="flex flex-col md:flex-row">
      <input
        type="email"
        placeholder="Enter your email address"
        className="flex-1 h-10 px-4 py-2 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
      />

      <button
        type="button"
        className="h-10 px-4 py-2 m-1 text-white transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400"
      >
        Register
      </button>
    </form>
  );
};

export default Input;
