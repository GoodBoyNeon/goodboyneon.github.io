import { FC } from 'react';
import { Project } from '../lib/types/projectTypes';
import Link from 'next/link';
import Image from 'next/image';
import { JetBrainsMono, Rubik } from '../utils';

interface MajorProjectData extends Project {
  i: number;
}
type MajorProjectProps = {
  project: MajorProjectData;
};

type TagProps = {
  tag: string;
};

const Tag: FC<TagProps> = ({ tag }) => {
  return (
    <div
      className={`${JetBrainsMono.className} rounded border px-2 py-2.5 text-xs text-subtext text-opacity-100 opacity-10`}
    >
      {tag}
    </div>
  );
};

const MajorProject: FC<MajorProjectProps> = ({
  project: { name, description, image, tags, githubUrl = '', url, i },
}) => {
  const visitUrl = url ? url : githubUrl;
  return (
    <>
      <div className="m-6 flex">
        <div className="relative flex flex-col">
          <Link
            href={visitUrl}
            target="_blank"
            className={`duration-350 z-[1] list-none text-3xl font-extrabold text-white transition-all [counter-increment:css-counter_1] before:text-special-text before:content-[counter(css-counter)_"._"] hover:text-special-text`}
          >
            {name}
          </Link>
          <p className="absolute inset-0 mx-[-1rem] my-4 h-min w-max max-w-[450px] rounded-lg bg-bg-light px-4 py-6 text-text">
            {description}
          </p>
          {tags.map((tag, i) => {
            return <Tag tag={tag} key={i} />;
          })}
        </div>

        {url && <Link href={url}></Link>}
        {githubUrl && <Link href={githubUrl} target="_blank"></Link>}
        {image && (
          <Image
            src={image}
            width={600}
            height={1}
            alt="Project Image"
            className="z-[-2] rounded-md"
          ></Image>
        )}
      </div>
    </>
  );
};

export default MajorProject;
