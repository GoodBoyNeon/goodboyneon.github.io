"use client";

import Link from "next/link";
import { useState } from "react";
import { AiFillGithub, AiFillHeart } from "react-icons/ai";
import { BiStar } from "react-icons/bi";
import { jetBrainsMono } from "../app/fonts";

type GitStats = {
  stars?: number;
};

const Footer = () => {
  const [{ stars }, setGitStats] = useState<GitStats>({
    stars: undefined,
  }); /* Show stars when I actually have some lol */

  // useEffect(() => {
  //   const octokit = new Octokit();
  //   octokit.rest.repos
  //     .get({
  //       owner: "goodboyneon",
  //       repo: "goodboyneon.github.io",
  //     })
  //     .then(({ data: { stargazers_count: stars } }) => {
  //       setGitStats({ stars });
  //     });
  // }, []);

  return (
    <footer>
      <div className="bg-background flex flex-col items-center justify-center">
        <hr className="bg-bg-light text-bg-light h-px w-screen border-0 text-center" />
        <Link
          className={`${jetBrainsMono.className} text-subtext hover:text-primary mt-4 flex flex-col items-center justify-center text-center transition-all duration-300`}
          href={"https://github.com/goodboyneon/goodboyneon.github.io"}
        >
          <div className="flex items-center gap-2">
            <AiFillGithub size={20} />
            <span>Made with</span> <AiFillHeart size={20} />
            <span>by Neon!</span>
          </div>
        </Link>
      </div>
      <p className="text-subtext pr-2 pb-1 text-right">&copy; All rights reserved</p>
    </footer>
  );
};

export default Footer;
