'use client';

import Link from 'next/link';
import { Octokit } from 'octokit';
import React, { useEffect, useState } from 'react';
import { BiGitRepoForked, BiLinkExternal, BiStar } from 'react-icons/bi';
import { JetBrainsMono } from '../utils';

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
    <footer className="bg-background">
      <hr className="h-[1px] w-screen border-0 bg-bg-light text-bg-light" />
      <Link
        className={`${JetBrainsMono.className} mt-4 flex max-w-fit flex-col text-subtext transition-all duration-300 hover:text-primary`}
        href={'https://github.com/goodboyneon/goodboyneon.github.io'}
      >
        <p className="flex flex-row">
          Check it out on Github <BiLinkExternal />
        </p>
        <div className="flex w-20 justify-between font-normal">
          <span className="flex flex-row">
            <BiStar />
            {stars && stars}
          </span>
          <span className="flex flex-row">
            <BiGitRepoForked />
            {forks && forks}
          </span>
        </div>
      </Link>
      <p className="pb-1 pr-2 text-right text-subtext">&copy; All rights reserved</p>
    </footer>
  );
};

export default Footer;
