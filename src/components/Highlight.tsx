import React, { FC, ReactNode } from 'react';

type HighlightProps = {
  children: string;
};

const Highlight: FC<HighlightProps> = ({ children }) => {
  return (
    <span className="before:ease relative text-special-text before:absolute before:bottom-[-2px] before:h-[1px] before:w-0 before:bg-special-text before:transition-all before:duration-300 before:content-[''] hover:before:w-full">
      {children}
    </span>
  );
};

export default Highlight;
