export default function AboutCard({ Logo, name, description }) {
  return (
    <div className="relative">
      <Logo size={80} color="#bebebe" className="absolute -left-7 -top-7" />
      <div className="relative max-w-md">
        <h2 className="uppercase tracking-widest font-bold">{name}</h2>
        <p className="text-justify">{description}</p>
      </div>
    </div>
  );
}
