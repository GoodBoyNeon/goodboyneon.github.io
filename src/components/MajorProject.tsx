import { FC } from 'react';
import { Project } from '../lib/types/projectTypes';

interface MajorProjectData extends Project {
  i: number;
}
type MajorProjectProps = {
  project: MajorProjectData;
};

const MajorProject: FC<MajorProjectProps> = ({
  project: { name, description, image, tags, githubUrl, url, i },
}) => {
  return (
    <div className="m-6 flex border-primary">
      <h2 className="text-white">{name}</h2>
      <p className="text-text">{description}</p>
    </div>
  );
};

export default MajorProject;
