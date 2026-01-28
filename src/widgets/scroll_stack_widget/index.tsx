import { Children, useRef } from "react";

import { Box } from "@mui/material";
import { motion, useScroll, useTransform } from "motion/react";

import type {
  ScrollStackItemWidgetPropsType,
  ScrollStackWidgetPropsType,
} from "./types";

const ScrollStackItemWidget = ({
  index,
  children,
  progress,
  range,
  targetScale,
}: ScrollStackItemWidgetPropsType) => {
  const boxRef = useRef<HTMLElement | null>(null);

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <Box
      ref={boxRef}
      className="card-container"
      height="97.5dvh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      position="sticky"
      top={0}
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5dvh + ${index * 32}px)`,
          position: "relative",
          width: "100%",
          height: "500px",
          transformOrigin: "top center",
        }}
      >
        {children}
      </motion.div>
    </Box>
  );
};

export const ScrollStackWidget = ({
  children,
  speedFactor = 25,
  sx,
  ...props
}: ScrollStackWidgetPropsType) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const childrenArray = Children.toArray(children);
  const childrenCount = Children.count(children);

  return (
    <Box
      ref={container}
      position="relative"
      height={`${childrenCount * 100 + speedFactor}dvh`}
      sx={sx}
      {...props}
    >
      {children &&
        childrenArray.map((value, index) => {
          const targetScale = 1 - (childrenCount - index) * 0.05;
          const rangeStart = index * (1 / childrenCount);
          const rangeEnd = 1;

          return (
            <ScrollStackItemWidget
              key={index}
              index={index}
              progress={scrollYProgress}
              range={[rangeStart, rangeEnd]}
              targetScale={targetScale}
            >
              {value}
            </ScrollStackItemWidget>
          );
        })}
    </Box>
  );
};
