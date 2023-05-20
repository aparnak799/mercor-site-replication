import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";

const ImageAnimation = () => {
  const controls = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        } else {
          controls.start("hidden");
        }
      },
      { threshold: 0.5 }
    );

    const observer2 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls2.start("visible");
        } else {
          controls2.start("hidden");
        }
      },
      { threshold: 0.5 }
    );

    const observer3 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls3.start("visible");
        } else {
          controls3.start("hidden");
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(document.querySelector("#image1"));
    observer2.observe(document.querySelector("#image2"));
    observer3.observe(document.querySelector("#image3"));

    return () => {
      observer.disconnect();
      observer2.disconnect();
      observer3.disconnect();
    };
  }, [controls, controls2, controls3]);

  return (
    <div>
      <motion.img
        id="image1"
        className="images"
        src={img1}
        animate={controls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0.8 },
        }}
        transition={{ duration: 0.6 }}
      />
      <motion.img
        id="image2"
        src={img2}
        className="images"
        animate={controls2}
        initial="hidden"
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0.8 },
        }}
        transition={{ duration: 0.6 }}
      />
      <motion.img
        id="image3"
        src={img3}
        className="images"
        animate={controls3}
        initial="hidden"
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0.8 },
        }}
        transition={{ duration: 0.6 }}
      />
    </div>
  );
};

export default ImageAnimation;
