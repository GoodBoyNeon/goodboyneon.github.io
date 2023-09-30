import { FC } from 'react';
import { Project } from '../lib/types/projectTypes';
import Link from 'next/link';
import Image from 'next/image';
import { JetBrainsMono, Rubik } from '../utils';
import { Highlight } from '.';

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
      className={`${JetBrainsMono.className} rounded border border-subtext px-2 py-2 text-center text-sm text-subtext text-opacity-100`}
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
            className={`z-[1] ml-3 mt-11 list-none text-3xl font-extrabold text-white transition-all duration-300 [counter-increment:css-counter_1] before:text-subtext before:content-[counter(css-counter)_"._"]`}
          >
            <Highlight>{name}</Highlight>
          </Link>
          <span className="absolute inset-0 top-12">
            <p className="my-4 h-min w-max max-w-[40vw] rounded bg-bg-light p-5 pt-7 text-text drop-shadow-bl">
              {description}
            </p>
            <div className="flex w-[40vw] flex-wrap gap-2">
              {tags.map((tag, i) => {
                return <Tag tag={tag} key={i} />;
              })}
            </div>
          </span>

          {url && <Link href={url}></Link>}
          {githubUrl && <Link href={githubUrl} target="_blank"></Link>}
        </div>

        {image && (
          <Image
            src={image}
            width={550}
            height={1}
            alt="Project Image"
            className="left-30 z-[-2] float-right ml-auto flex origin-right justify-end rounded-md"
          ></Image>
        )}
      </div>
    </>
  );
};

export default MajorProject;
