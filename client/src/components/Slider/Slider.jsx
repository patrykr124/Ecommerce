import { motion } from "framer-motion";
import React from "react";
import { textSlider, textSliderChildren } from "../../utils/variants";
import MaxWithWrapper from "../MaxWithWrapper";
function Slider() {
  return (
    <div className="slider h-screen w-full relative overflow-hidden">
      <div className="video absolute  top-0 left-0 w-full h-full">
        <iframe
          className="w-full h-[120%] fixed top-0 left-0 bottom-0 right-0 z-[-1] object-cover"
          src="https://www.youtube.com/embed/5rs3A8YcRgk?autoplay=1&mute=1&controls=0&loop=1&playlist=5rs3A8YcRgk"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
      <div className="content absolute left-0 right-0 bottom-0  flex items-center justify-center z-10">
        <MaxWithWrapper>
          <motion.div
            variants={textSlider}
            initial="hidden"
            animate="visible"
            className="text overflow-y-hidden flex flex-row gap-8 py-24"
          >
            <div className="left  flex flex-col flex-1 gap-10">
              <motion.h1
                variants={textSliderChildren}
                className="text-white text-[110px]"
              >
                The best brands ever
              </motion.h1>
              <motion.p variants={textSliderChildren} className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis doloremque excepturi assumenda labore eum possimus,
                a obcaecati illo earum consequatur sequi sed. Mollitia quaerat
                repellendus dolore facilis aliquid esse et!
              </motion.p>
            </div>
            <div className="right flex flex-1 items-end">
              <motion.p
                variants={textSliderChildren}
                className="text-white font-bold"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem dolorum architecto
              </motion.p>
            </div>
          </motion.div>
        </MaxWithWrapper>
      </div>
    </div>
  );
}

export default Slider;
