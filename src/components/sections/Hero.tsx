import Image from 'next/image';
import vector from '../../../public/vector.webp';
import Highlight from '../Highlight';
import { RevealAnimation } from '..';
import { useMediaQuery } from '@/hooks';

const Hero = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  return (
    <main className={`flex h-screen w-screen flex-col justify-center`}>
      <RevealAnimation>
        <h1 className={`px-6 text-5xl font-extrabold text-white`}>
          Neon The{' '}
          <span className="bg-gradient-to-r from-primary to-special-text bg-[size:0%_8px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 ease-in hover:bg-[size:100%_8px]">
            Developer
          </span>
        </h1>
      </RevealAnimation>
      <div className="m-0 md:w-[45%]">
        <RevealAnimation delay={3.25}>
          <p className="px-6 py-4 text-xl text-text">
            A dedicated <Highlight>programmer</Highlight> with a penchant for turning
            ideas into reality through elegant lines of code. Embracing challenges
            and seeking innovative solutions in the ever-evolving landscape of
            technology.
          </p>
        </RevealAnimation>
      </div>
      {isDesktop ?? (
        <Image
          src={vector}
          alt="vector"
          width={550}
          className="absolute left-[60%] justify-center"
        />
      )}
    </main>
  );
};
export default Hero;
