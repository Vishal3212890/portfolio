import { useState } from 'react';
import Button from './common/button.js';
import Separator from './common/separator.js';
import AboutCard from './common/about-card.js';
import { MdOutlineDesignServices } from 'react-icons/md';
import { FaCode } from 'react-icons/fa';
import { AiFillSetting } from 'react-icons/ai';
import SectionHeading from './common/section-heading.js';

export default function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="flex justify-center items-center flex-col gap-20">
      <SectionHeading label="About me" />
      <div className="flex justify-center items-center flex-col gap-6 text-justify w-2/4">
        <p>
          My name is Vishal Prajapati, a driven software engineer with a strong
          passion for crafting exceptional digital experiences. With several
          years of experience in full-stack development, I specialize in
          utilizing technologies like Node.js, React, Express and MongoDB to
          bring web applications to life. My work is marked by a commitment to
          excellence, a sharp eye for detail, and a knack for problem-solving.
          Whether it&apos;s building e-commerce platforms, data-driven apps, or
          tackling challenging projects, I thrive on turning ideas into
          functional, user-friendly software solutions.
        </p>
        <p>
          Simultaneously, I&apos;m on an academic journey as a BCA (Bachelor of
          Computer Applications) student at Manipal University Jaipur. My
          education has provided me with a solid grounding in computer science,
          encompassing subjects like algorithms, data structures, and database
          management. This academic foundation enriches my practical work,
          allowing me to apply cutting-edge knowledge to real-world problems.
        </p>
        {showMore && (
          <>
            <p>
              In addition to my core software engineering skills, I have a deep
              interest in blockchain technology. I&apos;ve had the privilege of
              working on projects that explore the decentralized and
              transformative potential of blockchain, including distributed
              ledgers and smart contracts.
            </p>
            <p>
              As I move forward, I&apos;m thrilled about the endless
              opportunities in the tech world. My goal is to continue
              contributing to innovative projects, bridging the gap between
              academia and industry, and making a meaningful impact through
              technology. Beyond the code, I enjoy [mention your hobbies or
              interests], which help me maintain a well-rounded and balanced
              approach to life.
            </p>
          </>
        )}
        <Button
          label={showMore ? 'Less' : 'More'}
          onClick={() => setShowMore(!showMore)}
        />
      </div>
      <Separator />
      <div className="flex items-center justify-center flex-wrap gap-16 w-2/3">
        <AboutCard
          Logo={MdOutlineDesignServices}
          name="Design"
          description="I can design the site based on your needs and suggestions. I can also
        design the site from scratch and consult you during the job."
        />
        <AboutCard
          Logo={FaCode}
          name="Development"
          description="I can design the site based on your needs and suggestions. I can also
        design the site from scratch and consult you during the job."
        />
        <AboutCard
          Logo={AiFillSetting}
          name="Maintenance"
          description="I can design the site based on your needs and suggestions. I can also
        design the site from scratch and consult you during the job."
        />
      </div>
      <Separator />
    </section>
  );
}
