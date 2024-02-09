import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology, index) => (
        <motion.div variants={fadeIn("up", "spring", index * 0.035, 0.5)}>
          <div className='w-28 h-28 items-center mt-4' key={technology.name}>
            <div className="flex items-center justify-center">
              <img
              src={technology.icon}
              alt='source code'
              className="h-24 self-center"
            />
            </div>
            
          {/* <BallCanvas icon={technology.icon} /> */}
            <div className="text-center pt-2">{technology.name}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");