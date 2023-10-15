import { MdDoubleArrow } from 'react-icons/md';
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineMail,
} from 'react-icons/ai';

export default function Footer() {
  return (
    <footer className="bg-black text-white flex items-center justify-center flex-col py-10 gap-10">
      <button className="uppercase flex items-center justify-center flex-col gap-2 text-lg tracking-widest font-bold">
        <MdDoubleArrow color="white" size={25} className="-rotate-90" />
        Back to top
      </button>
      <div className="flex gap-5">
        <AiOutlineLinkedin size={36} />
        <AiOutlineGithub size={36} />
        <AiOutlineInstagram size={36} />
        <AiOutlineMail size={36} />
      </div>
      <p>
        <span className="font-bold text-xl">@2023 Vishal Prajapati</span> All
        Rights Reserved.
      </p>
    </footer>
  );
}
