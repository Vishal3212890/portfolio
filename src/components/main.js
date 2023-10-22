import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import Link from 'next/link.js';
import Separator from './common/separator.js';
import About from './about.js';
import Skills from './skills.js';
import Portfolio from './portfolio.js';
import Contact from './contact.js';

export default function Main() {
  return (
    <main className="bg-neutral-200">
      <section className="flex items-center justify-center flex-col h-[calc(100vh-52px)]">
        <p className="text-xl">My name is Vishal</p>
        <p className="uppercase text-6xl">I&apos;m a developer</p>
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
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </main>
  );
}
