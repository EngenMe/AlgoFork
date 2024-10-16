interface Props {
  clickHandler: () => void;
}

const ShrinkedBtn = ({ clickHandler }: Props) => {
  return (
    <span
      onClick={(e) => {
        e.stopPropagation();
        clickHandler();
      }}
      className="text-white ml-7 bg-blue-500 rounded-full"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>
    </span>
  );
};

export default ShrinkedBtn;
