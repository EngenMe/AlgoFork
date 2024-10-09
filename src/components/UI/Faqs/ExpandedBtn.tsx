interface Props {
  clickHandler: () => void;
}

const ExpandedBtn = ({ clickHandler }: Props) => {
  return (
    <span
      onClick={(e) => {
        e.stopPropagation();
        clickHandler();
      }}
      className="text-gray-400 ml-7 bg-gray-200 rounded-full"
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
          d="M18 12H6"
        />
      </svg>
    </span>
  );
};

export default ExpandedBtn;
