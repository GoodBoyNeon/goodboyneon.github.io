'use client';

import Link from 'next/link';
import { Octokit } from 'octokit';
import { useEffect, useState } from 'react';
import { AiFillGithub, AiFillHeart } from 'react-icons/ai';
import { BiGitRepoForked, BiStar } from 'react-icons/bi';
import { jetBrainsMono } from '../app/fonts';

type GitStats = {
  stars?: number;
  forks?: number;
};

const Footer = () => {
  const [{ stars, forks }, setGitStats] = useState<GitStats>({
    stars: undefined,
    forks: undefined,
  });

  useEffect(() => {
    const octokit = new Octokit();
    octokit.rest.repos
      .get({
        owner: 'goodboyneon',
        repo: 'goodboyneon.github.io',
      })
      .then(({ data: { stargazers_count: stars, forks_count: forks } }) => {
        setGitStats({ stars, forks });
      });
  }, []);

  return (
    <footer>
      <div className="flex flex-col items-center justify-center bg-background">
        <hr className=" h-[1px] w-screen border-0 bg-bg-light text-bg-light" />
        <Link
          className={`${jetBrainsMono.className} mt-4 flex flex-col items-center justify-center text-subtext transition-all duration-300 hover:text-primary`}
          href={'https://github.com/goodboyneon/goodboyneon.github.io'}
        >
          <div className="flex flex-row space-x-1 align-middle">
            <span className="flex gap-2">
              <AiFillGithub size={20} className="" />
            </span>
            <span className="align-bottom">Made with</span>
            <AiFillHeart size={20} /> <span className="align-bottom">by Neon!</span>
          </div>
          <div className="flex w-20 justify-between space-x-1 font-normal">
            <span className="flex flex-row">
              <BiStar size={20} />
              <span>{stars && stars}</span>
            </span>
            <span className="flex flex-row">
              <BiGitRepoForked size={20} />
              <span>{forks && forks}</span>
            </span>
          </div>
        </Link>
      </div>
      <p className="pb-1 pr-2 text-right text-subtext">&copy; All rights reserved</p>
    </footer>
  );
};

export default Footer;
