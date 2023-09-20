"use client";
import Image from "next/image";
import vector from "../../public/vector.webp";
import Tooltip from "./Tooltip";
import Highlight from "./Highlight";
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
      <main className={`flex flex-col justify-center h-screen w-screen`}>
        <h1 className={`px-6 text-white font-extrabold text-5xl`}>
          Neon The{" "}
          <span className="hover:before:w-full relative before:content-[''] before:absolute before:bottom-[-2px] before:h-[3px] before:w-0 before:bg-primary before:transition-all before:duration-300 before:ease">
            Developer
          </span>
        </h1>
        <p className="text-xl text-text px-6 py-4 w-[45%]">
          A dedicated{" "}
          <Tooltip tooltip="refer to Wikipedia for definition, I'm lazy ;)">
            <span>programmer</span>
          </Tooltip>{" "}
          with a penchant for turning ideas into reality through elegant lines
          of code. Embracing challenges and seeking innovative solutions in the
          ever-evolving landscape of technology.
        </p>
        <Image
          src={vector}
          alt="vector"
          width={550}
          className="absolute justify-center left-[60%]"
        />
      </main>
    </>
  );
};

// <span className="tooltip group-hover:scale-100">
//   A computer programmer, sometimes referred to as a software
//   developer, a software engineer, a programmer or a coder, is a
//   person who creates computer programs. - Wikipedia, too lazy to
//   write it myself
// </span>
export default Hero;
