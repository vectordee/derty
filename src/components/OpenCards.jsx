import React, { useState } from "react";
import { motion } from "framer-motion";
import laundrypic1 from "../assets/images/delivery-african-american-man-yellow-polo-shirt-cap-standing-with-cardboard-boxes-hands-smiling-friendly-isolated-orange.webp";
import laundrypic2 from "../assets/images/cheerful-african-american-woman-with-towels-hands-near-washing-machine-selfservice-laundry.webp";
import laundrypic3 from "../assets/images/african-american-man-doing-laundry.webp";
import laundrypic4 from "../assets/images/happy-smiling-curly-haired-woman-searches-what-wear-stands-bright-outfits.webp";
import laundrypic5 from "../assets/images/smiling-afro-american-woman-with-dreadlocks-enjoys-housework-holds-polythene-bag.webp";
import AnimatedText from "./AnimatedText";
import AnimatedCardText from "./AniamtedCardText";

const OpenCards = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleCardHover = (index) => {
    setExpandedIndex(index === expandedIndex ? -1 : index);
  };

  const cardVariants = {
    expanded: {
      width: "400px",
    },
    collapsed: {
      width: "200px",
    },
  };

  const cardImages = [
    laundrypic1,
    laundrypic2,
    laundrypic3,
    laundrypic4,
    laundrypic5,
  ];

  const cardHeadings = [
    "Doorstep Convenience",
    "Personalized Care",
    "Reliable Service",
    "Quality Guarantee",
    "Time-Saving Solution",
  ];

  const cardDescriptions = [
    "Laundry delivered fresh to you.",
    "Customized cleaning solutions",
    "Seamless, on-time delivery.",
    "Expert care for your garments.",
    "Hassle-free laundry care.",
  ];
  return (
    <section className="py-16 pb-[300px] bg-yellow-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedCardText
          text="Why Choose Us?"
          className="text-2xl text-center text-black"
        />
      </div>

      <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-5">
        {[0, 1, 2, 3, 4].map((index) => (
          <motion.div
            key={index}
            className={`card cursor-pointer h-[500px] bg-cover bg-center rounded-[20px] ${
              index === expandedIndex ? "expanded" : "collapsed"
            }`}
            variants={cardVariants}
            initial="collapsed"
            animate={index === expandedIndex ? "expanded" : "collapsed"}
            transition={{ duration: 0.7 }}
            onClick={() => handleCardHover(index)}
            style={{ backgroundImage: `url(${cardImages[index]})` }}
          >
            <div className="card-content h-full flex flex-col justify-end">
              <div className="card-footer rounded-b-[20px] bg-yellow-600 bg-opacity-75 min-h-[100px] flex flex-col items-center justify-center">
                <h3 className="font-semibold text-black text-center px-5">
                  {cardHeadings[index]}
                </h3>
                {index === expandedIndex && (
                  // <motion.p className="mt-2 text-black text-center p-3">
                  //   {cardDescriptions[index]}
                  // </motion.p>
                  <AnimatedCardText
                    // initial={{ opacity: 0, x: 90 }}
                    // animate={{ opacity: 1, x: 0 }}
                    // transition={{ duration: 0.1 }}
                    text={cardDescriptions[index]}
                  />
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OpenCards;
