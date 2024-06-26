import React, { FC } from 'react';
import { rubik } from '../app/fonts';

type SectionHeaderProps = {
  children: string;
};

const SectionHeader: FC<SectionHeaderProps> = ({ children }) => (
  <h2
    className={`${rubik.className} relative flex items-center pb-3 text-3xl font-semibold text-white before:m-0 before:mr-2 before:h-3 before:w-3 before:rounded-[50%] before:bg-special-text before:content-[''] after:ml-5 after:h-[1px] after:w-12 after:bg-text after:opacity-20 after:content-[''] after:md:w-[300px]`}
  >
    {children}
  </h2>
);

export default SectionHeader;
