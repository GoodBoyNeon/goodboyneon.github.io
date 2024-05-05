'use client';
import { FC, useEffect, useRef } from 'react';
import { ProjectProps } from '../lib/types/projectTypes';
import { Highlight } from '.';
import { jetBrainsMono } from '../app/fonts';
import Link from 'next/link';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

type TagProps = {
  tag: string;
};
const Tag: FC<TagProps> = ({ tag }) => {
  return (
    <div
      className={`${jetBrainsMono.className} rounded border border-subtext px-2 py-2 text-center text-sm text-subtext text-opacity-100`}
    >
      {tag}
    </div>
  );
};
const MinorProject: FC<ProjectProps> = ({
  project: { name, url, githubUrl, tags, description },
}) => {
  const project = useRef<HTMLDivElement>(null);
  useEffect(() => {
    project.current?.addEventListener('mousemove', e => {
      const rect = project.current?.getBoundingClientRect();
      const x = e.clientX - (rect?.left ?? 0);
      const y = e.clientY - (rect?.top ?? 0);
      project.current?.style.setProperty('--mouse-x', `${x}px`);
      project.current?.style.setProperty('--mouse-y', `${y}px`);
    });
  }, []);
  return (
    <>
      <div
        ref={project}
        className="relative flex flex-col rounded border border-solid border-[rgba(255,_255,_255,_0.18)] bg-glass-effect-gradient p-6 backdrop-blur-md transition-opacity duration-150 [box-shadow:0_8px_32px_0_rgba(0,_0,_0,_0.2)] before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-20 before:h-full before:w-full before:rounded-[inherit] before:bg-gradient-glow before:opacity-0 before:transition-opacity before:duration-500 before:content-[''] before:[background:radial-gradient(800px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.06),transparent_40%)] before:hover:opacity-100"
      >
        <div>
          <p className={`text-sm text-special-text ${jetBrainsMono.className}`}>
            Minor Project
          </p>
          <Highlight>
            <h3 className="text-xl font-bold text-white">{name}</h3>
            <p className="text-text">{description}</p>
          </Highlight>
        </div>

        <div className="mt-auto flex justify-between pt-4">
          <div className="flex flex-row items-center justify-center gap-2">
            {githubUrl && (
              <Link href={githubUrl}>
                <span
                  className={`text-text transition duration-300 hover:text-white ${jetBrainsMono.className}`}
                >
                  <FiGithub size={22} />
                </span>
              </Link>
            )}
            {url && (
              <Link href={url}>
                <span
                  className={`text-primary transition duration-300 hover:text-special-text ${jetBrainsMono.className}`}
                >
                  <FiExternalLink size={22} />
                </span>
              </Link>
            )}
          </div>
          <div className="flex flex-wrap gap-2 self-end">
            {tags.map((tag, i) => {
              return <Tag tag={tag} key={i} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MinorProject;
