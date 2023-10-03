import React, { FC, ReactNode } from 'react';

type HighlightProps = {
  children: ReactNode;
  primaryColor?: boolean;
};

const Highlight: FC<HighlightProps> = ({ children, primaryColor }) => {
  let className =
    "before:ease relative before:absolute before:bottom-[-2px] before:h-[1px] before:w-0 before:transition-all before:duration-300 before:content-[''] hover:before:w-full";
  className += primaryColor
    ? ' text-primary before:bg-primary'
    : ' text-special-text before:bg-special-text';
  return <span className={className}>{children}</span>;
};

export default Highlight;
