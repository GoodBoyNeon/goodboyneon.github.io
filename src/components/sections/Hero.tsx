import Image from 'next/image';
import vector from '../../../public/system-vector.webp';
import Highlight from '../Highlight';
import { RevealAnimation } from '..';
import { useMediaQuery } from '@/hooks';

const Hero = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  return (
    <main className="flex h-screen w-screen items-center justify-between px-6">
      <div>
        <RevealAnimation>
          <h1 className={`text-5xl font-extrabold text-white`}>
            Neon The{' '}
            <span className="bg-gradient-to-r from-primary to-special-text bg-[size:0%_8px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 ease-in hover:bg-[size:100%_8px]">
              Developer
            </span>
          </h1>
        </RevealAnimation>
        <div className="">
          <RevealAnimation delay={3.25}>
            <p className="max-w-xl py-4 text-xl text-text">
              A dedicated <Highlight>programmer</Highlight> with a penchant for
              turning ideas into reality through elegant lines of code. Embracing
              challenges and seeking innovative solutions in the ever-evolving
              landscape of technology.
            </p>
          </RevealAnimation>
        </div>
      </div>
      {isDesktop && <Image src={vector} alt="vector" />}
    </main>
  );
};
export default Hero;
