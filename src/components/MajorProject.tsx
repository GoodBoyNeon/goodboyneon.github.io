import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { Highlight } from '.';
import { ProjectProps } from '../lib/types/projectTypes';
import { JetBrainsMono } from '../utils';

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

const MajorProject: FC<ProjectProps> = ({
  project: { name, description, image, tags, githubUrl = '', url, i },
}) => {
  const visitUrl = url ? url : githubUrl;

  if (i % 2 !== 0) {
    return (
      <div className="m-6 mb-10 flex">
        <div className="flex flex-col">
          <Link
            href={visitUrl}
            target="_blank"
            className={`z-[1] ml-3 mt-11 list-none text-3xl font-extrabold text-white transition-all duration-300 [counter-increment:css-counter_1] before:text-subtext before:content-[counter(css-counter)_"._"]`}
          >
            <Highlight>{name}</Highlight>
          </Link>
          <div className="relative bottom-4 m-0">
            <p className="h-min max-w-[40vw] rounded bg-bg-light p-5 pt-7 text-text drop-shadow-bl">
              {description}
            </p>
          </div>
          <div className="mb-2 flex w-[40vw] flex-wrap gap-2">
            {tags.map((tag, i) => {
              return <Tag tag={tag} key={i} />;
            })}
          </div>
          <div className="mt-6 flex w-[40vw] text-sm font-normal">
            {githubUrl && (
              <Link href={githubUrl} className="px-3">
                <span
                  className={`flex space-x-1 text-text transition duration-300 hover:text-white ${JetBrainsMono.className}`}
                >
                  <FiGithub size={22} />
                </span>
              </Link>
            )}
            {url && (
              <>
                <span className="border-l border-bg-light"></span>
                <Highlight primaryColor={true}>
                  <Link href={url} className="m-0">
                    <span
                      className={`ml-3 flex space-x-1 text-sm text-primary ${JetBrainsMono.className}`}
                    >
                      <FiExternalLink size={20} /> <span>Visit Me!</span>
                    </span>
                  </Link>
                </Highlight>
              </>
            )}
          </div>
        </div>
        {image && (
          <Image
            src={image}
            width={550}
            height={1}
            alt="Project Image"
            className="relative right-10 z-[-1] rounded-md"
          ></Image>
        )}
      </div>
    );
  } else {
    return (
      <>
        <div className="m-6 mb-16 flex flex-row-reverse justify-end">
          <div className="flex flex-col">
            <Link
              href={visitUrl}
              target="_blank"
              className={`relative right-12 z-[1] ml-3 mt-11 list-none text-3xl font-extrabold text-white transition-all duration-300 [counter-increment:css-counter_1] before:text-subtext before:content-[counter(css-counter)_"._"]`}
            >
              <Highlight>{name}</Highlight>
            </Link>
            <div className="relative bottom-4 right-10 m-0">
              <p className="h-min max-w-[40vw] rounded bg-bg-light p-5 pt-7 text-right text-text drop-shadow-bl">
                {description}
              </p>
            </div>
            <div className="relative right-10 flex w-[40vw] flex-row-reverse flex-wrap gap-2">
              {tags.map((tag, i) => {
                return <Tag tag={tag} key={i} />;
              })}
            </div>

            <div className="mt-6 flex w-[40vw] flex-row-reverse text-sm font-normal">
              {githubUrl && (
                <Link href={githubUrl} className="mr-8 px-3">
                  <span
                    className={`flex space-x-1 text-text transition duration-300 hover:text-white ${JetBrainsMono.className}`}
                  >
                    <FiGithub size={22} />
                  </span>
                </Link>
              )}
              {url && (
                <>
                  <span className="border-l border-bg-light"></span>
                  <Highlight primaryColor={true}>
                    <Link href={url} className="m-0">
                      <span
                        className={`mr-3 flex space-x-1 text-sm text-primary ${JetBrainsMono.className}`}
                      >
                        <FiExternalLink size={20} /> <span>Visit Me!</span>
                      </span>
                    </Link>
                  </Highlight>
                </>
              )}
            </div>
          </div>

          {image && (
            <Image
              src={image}
              width={550}
              height={1}
              alt="Project Image"
              className="z-[-2] rounded-md"
            ></Image>
          )}
        </div>
      </>
    );
  }
};

export default MajorProject;
