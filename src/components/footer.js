"use client";
import { MdDoubleArrow } from "react-icons/md";
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai";

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
        <AiOutlineLinkedin size={36} />
        <AiOutlineGithub size={36} />
        <AiOutlineInstagram size={36} />
        <AiOutlineMail size={36} />
      </div>
      <p>
        <span className="font-bold">@2023 Vishal Prajapati</span>&nbsp;
        <span className="text-sm">All Rights Reserved.</span>
      </p>
    </footer>
  );
}
