"use client";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link.js";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const links = (
    <>
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
    </>
  );

  return (
    <>
      <header className="bg-black text-white w-full px-5 py-3 flex justify-between items-center fixed top-0 right-0 z-10">
        <div>
          <Image src="/images/logo.png" width={30} height={30} />
        </div>
        <div>
          <div className="hidden sm:flex gap-5 items-center">{links}</div>
          <div className="sm:hidden" onClick={() => setIsOpen(true)}>
            <CiMenuBurger color="white" />
          </div>
          <div
            className={classNames(
              "sm:hidden bg-black h-full fixed top-0 right-0 z-20 duration-300 px-8 pt-5",
              isOpen ? "translate-x-0" : "translate-x-full"
            )}
          >
            <div className="flex justify-end">
              <RxCross1 color="white" onClick={() => setIsOpen(false)} />
            </div>
            <div className="flex flex-col items-center gap-5 mt-5">{links}</div>
          </div>
        </div>
      </header>
    </>
  );
}
