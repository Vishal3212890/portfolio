import SectionHeading from './common/section-heading.js';
import Separator from './common/separator.js';
import Skill from './common/skill.js';

export default function Skills() {
  return (
    <section className="flex items-center justify-center flex-col mt-16 gap-20">
      <SectionHeading label="Skills" />
      <div className="flex flex-wrap items-center justify-center w-2/4 gap-20">
        <Skill src="/images/html5.svg" title="HTML5" />
        <Skill src="/images/css3.svg" title="CSS3" />
        <Skill src="/images/js.svg" title="Javascript" />
        <Skill src="/images/nodejs.svg" title="NodeJS" />
        <Skill src="/images/react.svg" title="React" />
        <Skill src="/images/mongodb.svg" title="MongoDB" />
        <Skill src="/images/mysql.svg" title="MySQL" />
        <Skill src="/images/git.svg" title="Git" />
        <Skill src="/images/docker.svg" title="Docker" />
        <Skill src="/images/ethereum.svg" title="Ethereum" />
        <Skill src="/images/aws.svg" title="AWS" />
        <Skill src="/images/java.svg" title="Java" />
      </div>
      <Separator />
    </section>
  );
}
