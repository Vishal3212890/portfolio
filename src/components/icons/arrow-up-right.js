import classNames from "classnames";

export default function ArrowUpRight({ size = 800, color = "#000000" }) {
  return (
    <svg
      width={size + "px"}
      height={size + "px"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline"
    >
      <path
        d="M7 17L17 7M17 7H8M17 7V16"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
