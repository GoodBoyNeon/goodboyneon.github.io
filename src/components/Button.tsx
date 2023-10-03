import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';
import React, { FC, HTMLAttributeAnchorTarget, ReactNode } from 'react';

interface BaseButtonProps {
  children: ReactNode;
  style: 'Primary' | 'Secondary';
  type: 'Link' | 'Normal';
  className?: string;
}

interface NormalButtonProps extends BaseButtonProps {
  type: 'Normal';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

interface LinkButtonProps extends BaseButtonProps {
  type: 'Link';
  href: Url;
  target?: HTMLAttributeAnchorTarget;
}

const Button: FC<NormalButtonProps | LinkButtonProps> = props => {
  const { className = '' } = props;
  const primaryClassName = `${className} w-fit rounded border border-primary bg-transparent px-8 py-3 text-2xl font-medium text-primary shadow-[4px_4px] shadow-primary transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none`;
  const secondaryClassName = `${className} w-fit rounded border border-primary bg-transparent px-8 py-3 text-2xl font-medium text-primary shadow-[4px_4px] shadow-primary transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none`;

  const buttonClassName =
    props.style === 'Primary' ? primaryClassName : secondaryClassName;

  if (props.type === 'Link') {
    return (
      <Link
        href={props.href}
        className={buttonClassName}
        target={props.target ?? '_self'}
      >
        {props.children}
      </Link>
    );
  }
  if (props.type === 'Normal') {
    return (
      <button className={buttonClassName} onClick={props.onClick ?? (() => {})}>
        {props.children}
      </button>
    );
  }
};

export default Button;
