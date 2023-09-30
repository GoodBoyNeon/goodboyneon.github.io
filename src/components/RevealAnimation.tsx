'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import React, { FC, ReactElement, useEffect, useRef } from 'react';

type RevealAnimationProps = {
  delay?: number;
  width?: string;
  children: ReactElement;
};

const RevealAnimation: FC<RevealAnimationProps> = ({
  width = 'fit-content',
  delay = 0.25,
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const animationControls = useAnimation();
  const coverControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      animationControls.start('after');
      coverControls.start('after');
    }
  }, [isInView, animationControls, coverControls]);
  return (
    <div ref={ref} className="relative m-0 overflow-hidden" style={{ width }}>
      <motion.div
        variants={{
          before: { opacity: 0, y: 75 },
          after: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="before"
        animate={animationControls}
        transition={{
          duration: 0.3,
        }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          before: { left: '0' },
          after: { left: '100%' },
        }}
        initial="before"
        animate={coverControls}
        transition={{
          duration: 0.5,
          ease: 'easeIn',
        }}
        style={{
          position: 'absolute',
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: 'var(--color-primary)',
        }}
      ></motion.div>
    </div>
  );
};

export default RevealAnimation;
