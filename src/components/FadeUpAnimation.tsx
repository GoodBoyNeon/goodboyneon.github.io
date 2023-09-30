'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import { FC, ReactNode, useEffect, useRef } from 'react';

type FadeUpAnimationProps = {
  children: ReactNode;
};

const FadeUpAnimation: FC<FadeUpAnimationProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const animationControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      animationControls.start('after');
    }
  }, [animationControls, isInView]);

  return (
    <div ref={ref} className="relative m-0 overflow-hidden">
      <motion.div
        variants={{
          before: { opacity: 0, y: 75 },
          after: { opacity: 1, y: 0 },
        }}
        initial="before"
        animate={animationControls}
        transition={{ duration: 0.3, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default FadeUpAnimation;
