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
            <span className="before:ease relative before:absolute before:bottom-[-2px] before:h-[3px] before:w-0 before:bg-primary before:transition-all before:duration-300 before:content-[''] hover:before:w-full">
              Developer
            </span>
          </h1>
        </RevealAnimation>
        <div className="m-0 w-[45%]">
          <RevealAnimation>
            <p className="px-6 py-4 text-xl text-text">
              A dedicated{' '}
              <Tooltip tooltip="refer to Wikipedia for definition, I'm lazy ;)">
                <Highlight>programmer</Highlight>
              </Tooltip>{' '}
              with a penchant for turning ideas into reality through elegant lines of
              code. Embracing challenges and seeking innovative solutions in the
              ever-evolving landscape of technology.
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
