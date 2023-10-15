export default function AboutCard({ Logo, name, description }) {
  return (
    <div className="relative">
      <Logo size={80} color="#bebebe" className="absolute left-0 top-0" />
      <div className="relative top-8 left-10 max-w-md">
        <h2 className="uppercase tracking-widest font-bold">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
