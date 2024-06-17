import SectionHeading from './common/section-heading.js';
import Separator from './common/separator.js';
import Skill from './common/skill.js';

export default function Skills() {
  return (
    <section
      id="skills"
      className="flex items-center justify-center flex-col pt-28 gap-20 max-w-3xl mx-auto"
    >
      <SectionHeading label="Skills" />
      <div className="flex flex-wrap items-center justify-center gap-20">
        <Skill src="/images/html5.svg" title="HTML5" />
        <Skill src="/images/css3.svg" title="CSS3" />
        <Skill src="/images/js.svg" title="Javascript" />
        <Skill src="/images/nodejs.png" title="NodeJS" />
        <Skill src="/images/react.svg" title="React" />
        <Skill src="/images/mongodb.png" title="MongoDB" />
        <Skill src="/images/mysql.png" title="MySQL" />
        <Skill src="/images/git.svg" title="Git" />
        <Skill src="/images/docker.svg" title="Docker" />
        <Skill src="/images/ethereum.svg" title="Ethereum" />
        <Skill src="/images/aws.svg" title="AWS" />
        <Skill src="/images/java.svg" title="Java" />
      </div>
    </section>
  );
}
