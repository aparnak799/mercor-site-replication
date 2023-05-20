import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import ImageAnimation from "./ImageAnimation";

const ScrollableDiv = () => {
  const scrollableRef = useRef(null);
  const contentRef = useRef(null);
  const [thumbPosition, setThumbPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollableDiv = scrollableRef.current;
      const contentDiv = contentRef.current;
      const scrollProgress =
        scrollableDiv.scrollTop /
        (contentDiv.scrollHeight - scrollableDiv.clientHeight);
      const thumbPosition = scrollProgress * (scrollableDiv.clientHeight - 17); // 17 is the approximate scrollbar width
      setThumbPosition(thumbPosition);
    };

    const scrollableDiv = scrollableRef.current;
    scrollableDiv.addEventListener("scroll", handleScroll);

    return () => {
      scrollableDiv.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const thumbAnimation = {
    opacity: [0, 1],
    transition: {
      duration: 0.2,
      delay: 0.5,
    },
  };

  return (
    <div className="scrollable-div" ref={scrollableRef}>
      <motion.div id="scroll-content" ref={contentRef}>
        <ImageAnimation />
      </motion.div>
      <motion.div
        className="scrollbar-thumb"
        style={{ y: thumbPosition }}
        animate={thumbAnimation}
      />
    </div>
  );
};

export default ScrollableDiv;
