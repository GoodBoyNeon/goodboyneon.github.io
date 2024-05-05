import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';
import { PiGithubLogoFill } from 'react-icons/pi';
import { Toggle } from '.';
import { rubik } from '../app/fonts';

const Overlays = ({
  setRenderStars,
  renderStars,
}: {
  setRenderStars: Dispatch<SetStateAction<boolean>>;
  renderStars: boolean;
}) => {
  return (
    <>
      <div className="fixed left-0 right-0 top-0 z-10 flex items-start justify-between">
        <Link
          className={`${rubik.className} absolute left-0 top-0 m-std text-[34px] font-black tracking-widest text-white`}
          href="/"
        >
          NEON
        </Link>
        <Link
          className={`absolute right-0 top-0 m-std cursor-pointer rounded-md border-2 border-solid bg-transparent px-8 py-2 text-xl font-medium text-white backdrop-blur-md transition-all duration-200 ease-in-out hover:rounded-3xl hover:bg-white hover:text-background`}
          href="#contact"
        >
          Contact
        </Link>
      </div>
      <div className="fixed bottom-0 flex items-start justify-between">
        <Link
          className={`absolute bottom-0 left-0 m-std text-white`}
          href="https://github.com/GoodBoyNeon/goodboyneon.github.io"
          target="_blank"
        >
          <PiGithubLogoFill size="45" />
        </Link>
        <div className="fixed bottom-0 right-0 m-std flex flex-col items-center justify-center">
          <Toggle
            defaultState={renderStars}
            onClick={() => setRenderStars(!renderStars)}
          />
          <p className="mt-1 text-sm text-subtext">Toggle Stars</p>
        </div>
      </div>
    </>
  );
};

export default Overlays;
