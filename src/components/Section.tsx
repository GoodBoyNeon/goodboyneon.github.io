import React, { FC, ReactNode } from 'react';

type SectionProps = {
  name: string;
  children: ReactNode;
};

const Section: FC<SectionProps> = ({ name, children }) => {
  return (
    <section id={name} className="p-36 2xl:p-48">
      {children}
    </section>
  );
};

export default Section;
