import Image from "next/image.js";
import SectionHeading from "./common/section-heading.js";
import Link from "next/link.js";
import { BsArrowUpRight } from "react-icons/bs";

export default function Portfolio() {
  const projects = [
    {
      name: "Success.ai",
      description:
        "It is an AI-powered platform designed to help businesses with cold email outreach. It focuses on improving deliverability and response rates through features like account warmup and campaign management.",
      image: "/images/success-ai.png",
      links: [{ label: "View", url: "https://www.success.ai" }],
    },
    {
      name: "Mister Z",
      description:
        "MisterZ is an ICO platform designed to facilitate the listing of ERC20 token projects, enable user investments in various projects, and provide a platform for auditors to conduct audits and participate in project voting.",
      image: "/images/misterz.png",
      links: [{ label: "View", url: "https://www.misterz.com" }],
    },
    {
      name: "Bluechain",
      description:
        "Bluechain redefines cryptocurrency trading with a scalable, secure platform that leverages OKX's APIs to enable instant trades, real-time price tracking, and security with support for 2FA and authenticators.",
      image: "/images/bluechain.png",
      links: [{ label: "View", url: "https://dev.bluechain.trade" }],
    },
  ];

  return (
    <section
      id="portfolio"
      className="flex justify-center items-center flex-col gap-16 pt-28 max-w-7xl mx-auto"
    >
      <SectionHeading label="Portfolio" />
      <div className="flex flex-col items-center gap-5 px-5 xl:flex-row">
        {projects.map((project, index) => (
          <div key={index} className="md:w-1/2 xl:w-1/3 border-4 border-black">
            <Image
              src={project.image}
              alt={project.name}
              width={500}
              height={250}
              className="w-full h-[250px] object-cover"
            />
            <div className="p-2 flex flex-col gap-2">
              <h2 className="font-bold">{project.name}</h2>
              <p>{project.description}</p>
              <div>
                {project.links.map((link, index) => (
                  <Link
                    key={index}
                    href={link.url}
                    target="_blank"
                    className="border-b-2 border-black pb-1"
                  >
                    <span>{link.label}</span>
                    <BsArrowUpRight className="inline" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
