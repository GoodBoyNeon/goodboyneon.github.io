import React, { FC, ReactNode } from 'react';

type SectionProps = {
  name: string;
  children: ReactNode;
};

const Section: FC<SectionProps> = ({ name, children }) => {
  return (
    <section id={name} className="m-4 my-24 md:m-36 2xl:m-48">
      {children}
    </section>
  );
};

export default Section;
