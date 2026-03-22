import { ReactElement } from "react";
import { motion } from "framer-motion";

export default function FSMPopUp({ children }: { children?: ReactElement }) {
  return (
    <div className="flex min-h-screen min-w-full items-center justify-center bg-black bg-opacity-30">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}
      >
        <div className="flex rounded-md bg-purple-50 text-center">
          <div className="px-12 py-8">{children}</div>
        </div>
      </motion.div>
    </div>
  );
}
