import React, { useEffect } from "react";
import HeroAbout from "./HeroAbout";
import Aim from "./Aim";
import { motion, useAnimation } from "framer-motion";const Aboutpage = () => {
   const controls = useAnimation();

   useEffect(() => {
     controls.start({ y: 0, opacity: 1, transition: { duration: 1 } });
   }, []);
  return (
    <motion.div initial={{ y: 200, opacity: 0 }} animate={controls}>
      <div>
        <HeroAbout />
        <Aim />
      </div>
    </motion.div>
  );
};

export default Aboutpage;
