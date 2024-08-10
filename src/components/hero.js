import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import Link from "next/link.js";
import Separator from "./common/separator.js";
import { Snowfall } from "react-snowfall";
import { useEffect, useState } from "react";

export default function Hero() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const images = [
      "/images/html5.svg",
      "/images/css3.svg",
      "/images/react.svg",
      "/images/js.svg",
      "/images/docker.svg",
      "/images/mongodb.png",
      "/images/mysql.png",
      "/images/git.svg",
      "/images/aws.svg",
      "/images/nodejs.png",
      "/images/java.svg",
    ].map((e) => {
      const img = document.createElement("img");
      img.src = e;
      return img;
    });

    setImages(images);
  }, []);

  return (
    <section className="flex items-center justify-center flex-col h-screen relative">
      <Snowfall
        images={images}
        radius={[30, 50]}
        speed={[0.5, 1]}
        snowflakeCount={10}
      />
      <p className="md:text-2xl">My name is Vishal</p>
      <p className="uppercase text-3xl md:text-6xl text-center">
        I&apos;m a developer
      </p>
      <Separator />
      <div className="flex gap-8 mt-2">
        <Link href="https://github.com/Vishal3212890" target="_blank">
          <AiFillGithub size={36} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/vishal-prajapati-257197204"
          target="_blank"
        >
          <AiFillLinkedin size={36} />
        </Link>
        <Link href="mailto:vishalp3212890@gmail.com">
          <AiFillMail size={36} />
        </Link>
      </div>
    </section>
  );
}
