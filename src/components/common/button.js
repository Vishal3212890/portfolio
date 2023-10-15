export default function Button({ label, onClick }) {
  return (
    <button
      className="uppercase font-bold border-x-2 border-black py-1 px-8 focus-visible:outline-0"
      onClick={onClick}
    >
      {label}
    </button>
  );
}
