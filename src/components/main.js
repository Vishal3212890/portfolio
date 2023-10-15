import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import Separator from './common/separator.js';
import About from './about.js';
import Skills from './skills.js';
import Contact from './contact.js';

export default function Main() {
  return (
    <main className="bg-neutral-200">
      <section className="flex items-center justify-center flex-col h-[calc(100vh-52px)]">
        <p className="text-xl">My name is Vishal</p>
        <p className="uppercase text-6xl">I&apos;m a developer</p>
        <Separator />
        <div className="flex gap-8 mt-2">
          <AiFillGithub size={36} />
          <AiFillLinkedin size={36} />
          <AiFillMail size={36} />
        </div>
      </section>
      <About />
      <Skills />
      <Contact />
    </main>
  );
}
