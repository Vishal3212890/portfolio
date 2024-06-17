import Image from "next/image.js";

export default function Skill({ src, title }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-[50px] h-[50px] md:w-[100px] md:h-[100px]">
        <Image src={src} width={100} height={100} alt={title} />
      </div>
      <p className="uppercase mt-5">{title}</p>
    </div>
  );
}
