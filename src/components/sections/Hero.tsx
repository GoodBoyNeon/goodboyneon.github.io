'use client';
import Image from 'next/image';
import vector from '../../../public/vector.webp';
import Tooltip from '../Tooltip';
import Highlight from '../Highlight';
import { RevealAnimation } from '..';
// import dots from "../../public/dots.png";

const Hero = () => {
  return (
    <>
      {/*
      <Image
        src={dots}
        className="absolute top-0 bottom-0 m-auto left-[49%]"
        alt="dots"
      ></Image>
         */}
      <main className={`flex h-screen w-screen flex-col justify-center`}>
        <RevealAnimation>
          <h1 className={`px-6 text-5xl font-extrabold text-white`}>
            Neon The{' '}
            <span className="bg-gradient-to-r from-primary to-specialText bg-[size:0%_8px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 ease-in hover:bg-[size:100%_8px]">
              Developer
            </span>
          </h1>
        </RevealAnimation>
        <div className="m-0 w-[45%]">
          <RevealAnimation>
            <p className="px-6 py-4 text-xl text-text">
              A dedicated <Highlight>programmer</Highlight> with a penchant for
              turning ideas into reality through elegant lines of code. Embracing
              challenges and seeking innovative solutions in the ever-evolving
              landscape of technology.
            </p>
          </RevealAnimation>
        </div>
        <Image
          src={vector}
          alt="vector"
          width={550}
          className="absolute left-[60%] justify-center"
        />
      </main>
    </>
  );
};
export default Hero;
