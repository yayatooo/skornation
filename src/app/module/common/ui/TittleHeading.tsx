import { ChildrenProps } from "@/app/types/data";
import React from "react";
import * as motion from "motion/react-client";

export const TittleHeading: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <motion.h1
      className="font-extrabold text-xl text-redPrimary lg:text-4xl xl:text-5xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.h1>
  );
};
