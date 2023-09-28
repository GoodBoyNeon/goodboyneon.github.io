'use client';

import Link from 'next/link';
import { Octokit } from 'octokit';
import React, { useEffect, useState } from 'react';
import { BiGitRepoForked, BiStar } from 'react-icons/bi';

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
    <footer className="items-center justify-center bg-footerColor">
      <Link
        className="flex max-w-fit flex-col text-subText transition-all duration-300 hover:text-primary"
        href={'https://github.com/goodboyneon/goodboyneon.github.io'}
      >
        <p>Check it out on Github</p>
        <div className="flex w-20 justify-between">
          <span className="flex flex-row">
            <BiStar />
            {stars && stars}
          </span>
          <span className="flex flex-row">
            <BiGitRepoForked />
            {forks && `${forks}`}
          </span>
        </div>
      </Link>
    </footer>
  );
};

export default Footer;
