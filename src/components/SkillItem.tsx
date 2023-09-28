import React, { FC, ReactElement } from 'react';

type SkillItemProps = {
  name?: string;
  children: ReactElement;
};

const SkillItem: FC<SkillItemProps> = ({ name, children }) => {
  return (
    <div className="m-4 flex flex-col items-center justify-center">
      <span className="text-center text-7xl text-white">{children}</span>
      <p className="font-normal text-text">{name && name}</p>
    </div>
  );
};

export default SkillItem;
