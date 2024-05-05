import { FadeUpAnimation, MinorProject, Section, SectionHeader } from '..';
import { majorProjects, minorProjects } from '../../lib/projectList';
import { rubik } from '../../app/fonts';
import MajorProject from '../MajorProject';

const Projects = () => {
  return (
    <Section name="projects">
      <FadeUpAnimation>
        <div className="list-none [counter-reset:css-counter_0]">
          <SectionHeader>My Projects</SectionHeader>
          <div className="flex flex-col items-center justify-center">
            {majorProjects &&
              majorProjects.map((project, i) => {
                return (
                  <MajorProject key={i} project={{ i, ...project }}></MajorProject>
                );
              })}
          </div>
        </div>
      </FadeUpAnimation>

      <div className="flex flex-col items-center justify-center">
        <hr className="h-[1px] w-full border-0 bg-bg-light text-bg-light" />
        <h3 className={`mt-6 text-white ${rubik.className} text-2xl font-bold`}>
          <span className="text-primary">~</span> <span>Minor Projects</span>{' '}
          <span className="text-primary">~</span>
        </h3>
        <p className="mb-6 text-subtext">
          The projects that I won&apos;t flex the hardest on, but hey, they do take
          time, right ;)
        </p>

        <div className="my-4 grid grid-cols-3 gap-4">
          {minorProjects.map((project, i) => {
            return <MinorProject key={i} project={{ i, ...project }} />;
          })}
        </div>
      </div>
    </Section>
  );
};

export default Projects;
