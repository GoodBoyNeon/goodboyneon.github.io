'use client';
import React, { FC, ReactNode, useRef } from 'react';

type Props = {
  children: ReactNode;
  tooltip?: string;
};

const Tooltip: FC<Props> = ({ children, tooltip }) => {
  const tooltipRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <span
      onMouseEnter={({ clientX }) => {
        if (!tooltipRef.current) return;
        if (!containerRef.current) return;
        const { left } = containerRef.current.getBoundingClientRect();
        tooltipRef.current.style.left = clientX - left + 'px';
      }}
      className="group relative z-50 inline-block"
    >
      <span
        ref={tooltipRef}
        className="invisible absolute left-1/2 top-0 mt-2 max-w-[30rem] translate-x-[-50%] whitespace-nowrap rounded bg-tooltipColor px-[10px] py-[8px] text-lg text-white opacity-0 transition before:absolute before:left-[50%] before:top-[100%] before:translate-x-[-50%] before:overflow-hidden before:border-[15px] before:border-solid before:border-b-[#0000] before:border-l-[#0000] before:border-r-[#0000] before:border-t-tooltipColor before:content-[''] group-hover:visible group-hover:top-[-230%] group-hover:opacity-100"
      >
        {tooltip}
      </span>
      {children}
    </span>
  );
};

export default Tooltip;
