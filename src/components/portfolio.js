import Image from "next/image.js";
import SectionHeading from "./common/section-heading.js";
import Button from "./common/button.js";
import Link from "next/link.js";
import ArrowUpRight from "./icons/arrow-up-right.js";

export default function Portfolio() {
  const images = [
    "/images/carousel/carousel-1.jpg",
    "/images/carousel/carousel-2.jpg",
    "/images/carousel/carousel-3.jpg",
  ];

  const projects = [
    {
      name: "Success.ai",
      description:
        "It is an AI-powered platform designed to help businesses with cold email outreach. It focuses on improving deliverability and response rates through features like account warmup and campaign management.",
      image: "/images/carousel/carousel-1.jpg",
      links: [{ label: "View", url: "https://success.ai" }],
    },
    {
      name: "Mister Z",
      description:
        "MisterZ is an ICO platform designed to facilitate the listing of ERC20 token projects, enable user investments in various projects, and provide a platform for auditors to conduct audits and participate in project voting.",
      image: "/images/carousel/carousel-2.jpg",
      links: [{ label: "View", url: "https://wethio.misterz.com" }],
    },
    {
      name: "Bluechain",
      description:
        "Bluechain redefines cryptocurrency trading with a scalable, secure platform that leverages OKX's APIs to enable instant trades, real-time price tracking, and security with support for 2FA and authenticators.",
      image: "/images/carousel/carousel-3.jpg",
      links: [{ label: "View", url: "https://wethio.misterz.com" }],
    },
  ];

  return (
    <section
      id="portfolio"
      className="flex justify-center items-center flex-col gap-16 mt-16 max-w-7xl mx-auto px-5"
    >
      <SectionHeading label="Portfolio" />
      <div className="flex gap-5">
        {projects.map((project, index) => (
          <div key={index} className="w-1/3 border-4 border-black">
            <Image
              src={project.image}
              alt={project.name}
              width={700}
              height={300}
            />
            <div className="p-2 flex flex-col gap-2">
              <h2 className="font-bold">{project.name}</h2>
              <p>{project.description}</p>
              <div>
                {project.links.map((link, index) => (
                  <Link
                    key={index}
                    href={link.url}
                    className="border-b-2 border-black pb-1"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight size={20} />
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
