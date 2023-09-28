import React, { FC } from 'react';
import { Rubik } from '../utils';

type SectionHeaderProps = {
  children: string;
};

const SectionHeader: FC<SectionHeaderProps> = ({ children }) => (
  <h2
    className={`${Rubik.className} relative flex items-center pb-3 text-3xl font-semibold text-white before:m-0 before:mr-2 before:h-3 before:w-3 before:rounded-[50%] before:bg-specialText before:content-[''] after:ml-5 after:h-[1px] after:w-[300px] after:bg-text after:opacity-20 after:content-['']`}
  >
    {children}
  </h2>
);

export default SectionHeader;
