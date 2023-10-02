'use client';

import React, { FC, MouseEvent, useState } from 'react';

type ToggleProps = {
  defaultState: boolean;
  onClick: (
    event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => void | undefined;
};

const Toggle: FC<ToggleProps> = ({ defaultState, onClick }) => {
  const [enabled, setEnabled] = useState(defaultState);
  const color = enabled ? 'bg-primary' : 'bg-gray-700';
  const position = enabled ? 'ml-6' : '';

  const handleClick = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    setEnabled(!enabled);
    onClick(e);
  };
  return (
    <div
      onClick={e => handleClick(e)}
      className={`flex h-6 w-12 rounded-full ${color} cursor-pointer transition-all duration-300`}
    >
      <span
        className={`${position} h-6 w-6 rounded-full bg-white transition-all duration-300`}
      />
    </div>
  );
};

export default Toggle;
