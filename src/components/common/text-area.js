export default function TextArea({ name, placeholder }) {
  return (
    <textarea
      rows={5}
      className="w-full border-l-4 border-b-4 border-black outline-none bg-inherit p-3"
      name={name}
      placeholder={placeholder}
    />
  );
}
