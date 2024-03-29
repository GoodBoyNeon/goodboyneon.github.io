export interface Project {
  name: string;
  description: string;
  tags: string[];
  image?: string;
  githubUrl?: string;
  url?: string;
}

export interface ProjectPropData extends Project {
  i: number;
}
export type ProjectProps = {
  project: ProjectPropData;
};
