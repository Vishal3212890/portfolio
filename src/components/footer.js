"use client";
import { MdDoubleArrow } from "react-icons/md";
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import Link from "next/link.js";

export default function Footer() {
  const handleBackToTopClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-black text-white flex items-center justify-center flex-col py-10 gap-8">
      <button
        className="group uppercase flex items-center justify-center flex-col gap-2 text-lg tracking-widest font-bold"
        onClick={handleBackToTopClick}
      >
        <MdDoubleArrow
          color="white"
          size={25}
          className="-rotate-90 bottom-0 duration-200 group-hover:-translate-y-1"
        />
        Back to top
      </button>
      <div className="flex gap-5">
        <Link
          href="https://www.linkedin.com/in/vishal-prajapati-257197204"
          target="_blank"
        >
          <AiOutlineLinkedin size={36} />
        </Link>
        <Link href="https://github.com/Vishal3212890" target="_blank">
          <AiOutlineGithub size={36} />
        </Link>
        <Link
          href="https://www.instagram.com/vishal.prajapati_/"
          target="_blank"
        >
          <AiOutlineInstagram size={36} />
        </Link>
        <Link href="mailto:vishalp3212890@gmail.com">
          <AiOutlineMail size={36} />
        </Link>
      </div>
      <p>
        <span className="font-bold">@2023 Vishal Prajapati</span>&nbsp;
        <span className="text-sm">All Rights Reserved.</span>
      </p>
    </footer>
  );
}
