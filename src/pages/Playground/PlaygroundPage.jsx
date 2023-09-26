import PlaygroundHome from "./PlaygroundHome";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
const PlaygroundPage = () => {
  // Create animation controls using framer-motion
  const controls = useAnimation();

  // Use useEffect to start the animation when the component mounts
  useEffect(() => {
    // Start animation to move the component from y=200 to y=0 with opacity transition
    controls.start({ y: 0, opacity: 1, transition: { duration: 1 } });
  }, []); // Empty dependency array ensures this effect runs only once, on component mount

  return (
    // Apply animation to the entire component using motion.div
    <motion.div initial={{ y: 200, opacity: 0 }} animate={controls}>
      <PlaygroundHome />
    </motion.div>
  );
};

export default PlaygroundPage;
