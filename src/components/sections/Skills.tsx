import {
  BiLogoCss3,
  BiLogoGit,
  BiLogoGraphql,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoPython,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from 'react-icons/bi';
import { SiLua, SiLinux, SiNextdotjs, SiPrisma, SiSqlite } from 'react-icons/si';
import { FadeUpAnimation, Section, SectionHeader } from '..';
import SkillItem from '../SkillItem';

const Skills = () => {
  return (
    <Section name="skills">
      <FadeUpAnimation>
        <div className="">
          <SectionHeader>What can I do for you?</SectionHeader>
          <p className="text-lg font-normal text-text">
            Over the years, I&apos;ve learnt a lot of stuff, so here&apos;s a few of
            those which I have did the best:
          </p>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-3">
            <SkillItem name="TypeScript">
              <BiLogoTypescript />
            </SkillItem>

            <SkillItem name="JavaScript">
              <BiLogoJavascript />
            </SkillItem>

            <SkillItem name="Next.js">
              <SiNextdotjs />
            </SkillItem>

            <SkillItem name="React.js">
              <BiLogoReact />
            </SkillItem>

            <SkillItem name="Tailwind CSS">
              <BiLogoTailwindCss />
            </SkillItem>

            <SkillItem name="Linux">
              <SiLinux />
            </SkillItem>

            <SkillItem name="Node.js">
              <BiLogoNodejs />
            </SkillItem>

            <SkillItem name="HTML">
              <BiLogoHtml5 />
            </SkillItem>

            <SkillItem name="CSS">
              <BiLogoCss3 />
            </SkillItem>

            <SkillItem name="Prisma">
              <SiPrisma />
            </SkillItem>

            <SkillItem name="Git">
              <BiLogoGit />
            </SkillItem>

            <SkillItem name="Mongo DB">
              <BiLogoMongodb />
            </SkillItem>

            <SkillItem name="Python">
              <BiLogoPython />
            </SkillItem>

            <SkillItem name="Lua">
              <SiLua />
            </SkillItem>

            <SkillItem name="SQL Databases">
              <SiSqlite />
            </SkillItem>

            <SkillItem name="GraphQl">
              <BiLogoGraphql />
            </SkillItem>
          </div>
        </div>
      </FadeUpAnimation>
    </Section>
  );
};

export default Skills;
