import React from "react";
import { motion } from "framer-motion";

const defaultAnimation = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

function AnimatedText({ text, el: Wrapper = "p", className }) {
  return (
    <Wrapper className={className}>
      <span className="sr-only">{text}</span>

      <motion.span
        variants={{
          visible: { transition: { staggerChildren: 0.15 } },
          hidden: {},
        }}
        initial="hidden"
        animate="visible"
        aria-hidden
      >
        {[...text].map((char, charIndex) => (
          <motion.span
            variants={defaultAnimation}
            key={`${char}-${charIndex}`}
            className="inline-block"
          >
            {char}
          </motion.span>
        ))}
      </motion.span>
    </Wrapper>
  );
}

export default AnimatedText;
