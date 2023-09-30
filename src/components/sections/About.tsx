'use client';

import Image from 'next/image';
import React from 'react';
import { FadeUpAnimation, Highlight, Section, SectionHeader } from '..';

const About = () => {
  return (
    <Section name="about">
      <FadeUpAnimation>
        <SectionHeader>Heya, I am Neon!</SectionHeader>
        <div className="flex items-center justify-center">
          <div className="flex flex-col">
            <p className="text-lg font-normal text-text">
              A passionate software developer (you&apos;ve heard that a million
              times, I know) from Nepal. I started my programming journey in late
              2021, with an old iPad, and a spark of interest. My first bit of code
              was a <Highlight>Discord Bot</Highlight>, that could respond with
              &quot;Pong&quot; — not impressive, but special (at least, to me)
              <br />
              <br />I went on to learn more about programming in general. How
              computers work? How to develop algorithms for certains task? How to
              think like a programmer? et cetera... With my love for programming and
              the countless free resources online, I became a well-skilled software
              developer by the end of 2022.
              <br />I later went on to learn <Highlight>APIs</Highlight>, a fair bit
              of <Highlight>Networking</Highlight>, and most importantly,{' '}
              <Highlight>Linux</Highlight>{' '}
              <span className="text-subtext text-xs font-extralight">
                I use Arch, btw
              </span>
            </p>
          </div>
          <Image
            src={'/about-logo.png'}
            width={800}
            height={800}
            alt="neon's icon"
            className="ml-4 rounded-lg grayscale-[100%] transition duration-300 hover:grayscale-0"
          />
        </div>
      </FadeUpAnimation>
    </Section>
  );
};

export default About;
