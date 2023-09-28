import Link from 'next/link';
import { BiLogoDiscordAlt, BiLogoGithub, BiLogoTwitter } from 'react-icons/bi';
import { FadeUpAnimation, Section, SectionHeader } from '..';

const Contact = () => {
  return (
    <Section name="contact">
      <FadeUpAnimation>
        <div>
          <SectionHeader>Let&apos;s get in touch!</SectionHeader>
          <p className="flex text-center text-lg font-normal text-text">
            I am always hunting for opportunities that can escalate me as a
            developer. Whether it is a work offer, a question or just a
            &quot;hi&quot;, my inboxes are always open to greet you!
          </p>
          <div className="flex items-center justify-center pt-4">
            <Link
              href={
                'mailto:hello@neon.is-a.dev?subject=Sent%20from%20neon.is-a.dev%3A%20'
              }
              className="w-fit rounded border border-primary bg-transparent px-8 py-3 text-2xl font-medium text-primary shadow-[4px_4px] shadow-primary transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
            >
              Say Hi!
            </Link>
          </div>
          <div className="mt-4 flex flex-row-reverse">
            <Link href={'https://github.com/GoodBoyNeon'} className="m-1">
              <BiLogoGithub className="text-4xl text-primary"></BiLogoGithub>
            </Link>
            <Link href={'https://twitter.com/NeonTheNerd'} className="m-1">
              <BiLogoTwitter className="text-4xl text-primary"></BiLogoTwitter>
            </Link>
            <Link
              href={'https://discord.com/users/816253376962625537'}
              className="m-1"
            >
              <BiLogoDiscordAlt className="text-4xl text-primary"></BiLogoDiscordAlt>
            </Link>
          </div>
        </div>
      </FadeUpAnimation>
    </Section>
  );
};

export default Contact;
