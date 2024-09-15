export default function Button({ children, onClick, ...props }) {
  return (
    <button
      className="button uppercase font-bold border-x-2 border-black py-1 px-8 focus-visible:outline-0"
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
