import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="p-36">
      <h2 className="flex relative items-center text-3xl pb-3 text-white font-semibold after:content-[''] after:w-[300px] after:h-[1px] after:ml-5 after:bg-text after:opacity-20">
        Heya, I am Neon!
      </h2>
      <div className="flex justify-center items-center">
        <div className="flex flex-col">
          <p className="text-lg font-normal text-text">
            A passionate software developer (you&apos;ve heard that a million
            times, I know) from Nepal. I started my programming journey in late
            2021, with an old iPad, and a spark of interest. My first bit of
            code was a discord bot, that could respond with &quot;Pong&quot; —
            not impressive, but special (at least, to me)
            <br />
            <br />I went on to learn more about programming in general. How
            computers work? How to develop algorithms for certains task? How to
            think like a programmer? et cetera... With my love for programming
            and the countless free resources online, I became a well-skilled
            software developer by the end of 2022.
            <br />I later went on to learn APIs, a fair bit of Networking, and
            Linux{" "}
            <span className="font-extralight text-xs text-subtext">
              I use Arch, btw
            </span>
          </p>
        </div>
        <Image
          src={"/about-logo.png"}
          width={800}
          height={800}
          alt="neon's icon"
          className="rounded-lg ml-4 grayscale-[100%] transition duration-300 hover:grayscale-0"
        />
      </div>
    </section>
  );
};

export default About;
