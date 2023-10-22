import Link from 'next/link.js';

export default function Header() {
  return (
    <header className="bg-black text-white px-10 py-3 flex justify-end items-center gap-12 sticky top-0 z-10">
      <Link href="#about" className="font-bold">
        About me
      </Link>
      <Link href="#skills" className="font-bold">
        Skills
      </Link>
      <Link href="#portfolio" className="font-bold">
        Portfolio
      </Link>
      <Link
        href="#contact"
        className="uppercase bg-white text-black font-bold rounded-full px-5 py-2"
      >
        Contact me
      </Link>
    </header>
  );
}
