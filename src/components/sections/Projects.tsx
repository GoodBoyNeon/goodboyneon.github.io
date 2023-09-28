import React from 'react';
import { Section, SectionHeader } from '..';
import { majorProjects } from '../../lib/projectList';
import MajorProject from '../MajorProject';

const Projects = () => {
  return (
    <Section name="projects">
      <SectionHeader>My Projects</SectionHeader>
      {majorProjects &&
        majorProjects.map((project, i) => {
          return <MajorProject key={i} project={{ i, ...project }}></MajorProject>;
        })}
    </Section>
  );
};

export default Projects;
