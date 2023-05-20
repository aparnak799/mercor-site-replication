import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

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
        {/* Add your content here */}
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>
          Nullam ut semper tortor. In fermentum bibendum ex, vitae efficitur
          arcu pellentesque vitae.
        </p>
        <p>
          Etiam sagittis, dolor eget mollis malesuada, elit enim dictum tellus,
          ut ultricies risus dolor non lacus.
        </p>
        <p>Proin at metus tellus. Sed ut varius purus.</p>
        <p>Morbi non velit risus.</p>
        <p>
          Curabitur gravida arcu eget metus lacinia, at consectetur tortor
          tincidunt.
        </p>
        <p>Nunc nec enim feugiat, ultrices lorem at, semper ipsum.</p>
        <p>Suspendisse congue ipsum vitae nisi fringilla vulputate.</p>
        <p>Quisque et ex vel diam tincidunt tristique id sed velit.</p>
        <p>
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas.
        </p>
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
