import React, { FC, ReactNode, useRef } from "react";

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
        tooltipRef.current.style.left = clientX - left + "px";
      }}
      className="group relative inline-block"
    >
      <span
        ref={tooltipRef}
        className="invisible group-hover:visible opacity-0 group-hover:opacity-100 group-hover:top-[-230%] absolute left-1/2 top-0 translate-x-[-50%] px-[10px] py-[8px] whitespace-nowrap transition bg-tooltipColor text-white rounded mt-2 max-w-[30rem] before:content-[''] before:absolute before:left-[50%] before:top-[100%] before:translate-x-[-50%] before:border-[15px] before:border-solid before:border-t-tooltipColor before:border-r-[#0000] before:border-b-[#0000] before:border-l-[#0000] before:overflow-hidden text-lg"
      >
        {tooltip}
      </span>
      {children}
    </span>
  );
};

export default Tooltip;
