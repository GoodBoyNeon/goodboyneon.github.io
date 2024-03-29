import Link from 'next/link';
import { BiLogoDiscordAlt, BiLogoGithub, BiLogoTwitter } from 'react-icons/bi';
import { Button, FadeUpAnimation, Section, SectionHeader } from '..';

const Contact = () => {
  return (
    <Section name="contact">
      <FadeUpAnimation>
        <SectionHeader>Let&apos;s get in touch!</SectionHeader>
        <p className="flex text-center text-lg font-normal text-text">
          I am always hunting for opportunities that can escalate me as a developer.
          Whether it is a work offer, a question or just a &quot;hi&quot;, my inboxes
          are always open to greet you!
        </p>
        <div className="flex items-center justify-center pt-4">
          <Button
            type="Link"
            style="Primary"
            href="mailto:hello@neon.is-a.dev?subject=Sent%20from%20neon.is-a.dev%3A%20"
          >
            Say Hi!
          </Button>
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
      </FadeUpAnimation>
    </Section>
  );
};

export default Contact;
