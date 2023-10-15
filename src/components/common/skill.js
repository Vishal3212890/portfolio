import Image from 'next/image.js';

export default function Skill({ src, title }) {
  return (
    <div className="text-center inline-block">
      <div className="w-[100px] h-[100px] flex items-center">
        <Image src={src} width={100} height={100} alt={title} />
      </div>
      <p className="uppercase mt-5">{title}</p>
    </div>
  );
}
