export default function TextField({ name, placeholder }) {
  return (
    <input
      type="text"
      className="w-full border-l-4 border-b-4 border-black outline-none bg-inherit p-3"
      name={name}
      placeholder={placeholder}
    />
  );
}
