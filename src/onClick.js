import React from "react";
import { motion } from "framer-motion";
import "./onClick.css";
const AnimatedButton = ({ children, animation }) => {
  const animations = {
    scale: {
      scale: [1, 1.2, 1],
      transition: { duration: 0.2 },
    },
    rotate: {
      rotate: [0, 360],
      transition: { duration: 0.5 },
    },
    bounce: {
      y: [0, -20, 0],
      transition: { duration: 0.5, type: "spring", stiffness: 500 },
    },
    shake: {
      x: [0, -10, 10, -10, 10, 0],
      transition: { duration: 0.4 },
    },
    color: {
      backgroundColor: ["#4CAF50", "#2196F3", "#4CAF50"],
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={animations[animation]}
      className="animated-button"
    >
      {children}
    </motion.button>
  );
};

const OnClickAnimations = () => {
  return (
    <div className="button-container">
      <AnimatedButton animation="scale">Scale</AnimatedButton>
      <AnimatedButton animation="rotate">Rotate</AnimatedButton>
      <AnimatedButton animation="bounce">Bounce</AnimatedButton>
      <AnimatedButton animation="shake">Shake</AnimatedButton>
      <AnimatedButton animation="color">Color Change</AnimatedButton>
    </div>
  );
};

export default OnClickAnimations;
