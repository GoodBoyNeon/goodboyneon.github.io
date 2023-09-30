import React from 'react';
import { FadeUpAnimation, Section, SectionHeader } from '..';
import { majorProjects } from '../../lib/projectList';
import MajorProject from '../MajorProject';

const Projects = () => {
  return (
    <Section name="projects">
      <FadeUpAnimation>
        <div className="list-none [counter-reset:css-counter_0]">
          <SectionHeader>My Projects</SectionHeader>
          {majorProjects &&
            majorProjects.map((project, i) => {
              return (
                <MajorProject key={i} project={{ i, ...project }}></MajorProject>
              );
            })}
        </div>
      </FadeUpAnimation>
    </Section>
  );
};

export default Projects;
