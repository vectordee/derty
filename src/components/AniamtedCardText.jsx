import React from "react";

import { motion } from "framer-motion";

const defaultAnimation = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};

function AnimatedCardText({ text, el: Wrapper = "p", className }) {
  // Splitting text into an array of words and characters
  const words = text.split(" ");
  const characters = words.map((word) => word.split(" "));

  return (
    <Wrapper className={className}>
      <span className="sr-only">{text}</span>

      <motion.span
        variants={{
          visible: { transition: { staggerChildren: 0.05 } },
          hidden: {},
        }}
        initial="hidden"
        animate="visible"
        aria-hidden
      >
        {characters.map((word, wordIndex) => (
          <motion.span key={`word-${wordIndex}`} className="inline-block">
            {word.map((char, charIndex) => (
              <motion.span
                variants={defaultAnimation}
                key={`${char}-${charIndex}`}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
            {wordIndex !== characters.length - 1 && (
              <motion.span
                variants={defaultAnimation}
                key={`space-${wordIndex}`}
                className="inline-block"
              >
                {"\u00A0"} {/* Non-breaking space */}
              </motion.span>
            )}
          </motion.span>
        ))}
      </motion.span>
    </Wrapper>
  );
}

export default AnimatedCardText;
