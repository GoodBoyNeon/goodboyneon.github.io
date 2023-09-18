import Link from "next/link";
import { PiGithubLogoFill } from "react-icons/pi";
import React from "react";

const Overlays = () => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-12 flex justify-between items-start">
        <Link
          className={`absolute top-0 m-std left-0 text-white font-black text-4xl tracking-widest`}
          href="/"
        >
          NEON
        </Link>
        <Link
          className={`absolute m-std top-0 right-0 text-xl text-white font-medium bg-transparent border-2 border-solid rounded-md cursor-pointer px-8 py-2 hover:bg-white hover:text-background hover:rounded-3xl transition-all ease-in-out duration-150`}
          href="#contact"
        >
          Contact
        </Link>
      </div>
      <div className="fixed bottom-0 flex justify-between items-start">
        <Link
          className={`absolute bottom-0 left-0 m-std text-white`}
          href="https://github.com/GoodBoyNeon/goodboyneon.github.io"
          target="_blank"
        >
          <PiGithubLogoFill size="45" />
        </Link>
      </div>
    </>
  );
};

export default Overlays;
