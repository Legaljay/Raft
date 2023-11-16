/* eslint-disable react/prop-types */
import { motion, useAnimation, useInView, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";

export const Reveal = ({ children, width = "fit-content" }) => {
  const ref = useRef(null);
  const { scrollY } = useScroll()
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);
  return (
    <div
      ref={ref}
      style={{ position: "relative", width, overflow: "hidden" }}
      className={`flex flex-col ${"items-center"} gap-[24px] w-[342px] lg:w-[896px] ${"mx-auto"}`}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          right: 0,
          left: 0,
          zIndex: 20,
          background: "#2b892E",
          overflow: "hidden",
        }}
      ></motion.div>
    </div>
  );
};
