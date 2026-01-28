import { Children, useCallback, useEffect, useState } from "react";

import { Stack } from "@mui/material";
import { motion, type Variants } from "motion/react";

import type {
  CardSwapItemWidgetPropsType,
  CardSwapWidgetPropsType,
} from "./types";

const CardSwapItemWidget = ({
  children,
  visualIndex,
  total,
  cardDistance,
  verticalDistance,
  rotateY,
  onClick,
}: CardSwapItemWidgetPropsType) => {
  const isDropping = visualIndex === total - 1;

  const variants: Variants = {
    stack: (vIndex: number) => ({
      x: vIndex * cardDistance,
      y: -vIndex * verticalDistance,
      z: -vIndex * cardDistance * 1.5,
      rotateY: rotateY,
      opacity: 1,
      scale: 1,
      zIndex: total - vIndex,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 20,
        mass: 1,
      },
    }),
    drop: {
      y: [0, 100, -((total - 1) * verticalDistance)],
      x: [0, 0, (total - 1) * cardDistance],
      z: [0, 0, -((total - 1) * cardDistance * 1.5)],
      rotateY: rotateY,
      opacity: [1, 0, 1],
      zIndex: 0,
      scale: [1, 0.9, 1],
      transition: {
        times: [0, 0.5, 1],
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      onClick={onClick}
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        transformOrigin: "center center",
        cursor: visualIndex === 0 ? "default" : "pointer",
        willChange: "transform, opacity",
      }}
      animate={isDropping ? "drop" : "stack"}
      custom={visualIndex}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export const CardSwapWidget = ({
  children,
  cardDistance = 32,
  verticalDistance = 16,
  rotateY = -10,
  delay = 3000,
  pauseOnHover = false,
  onCardClick,
  clickToSwap = false,
  sx,
  ...props
}: CardSwapWidgetPropsType) => {
  const [activeBit, setActiveBit] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const childrenArray = Children.toArray(children);
  const childrenCount = Children.count(children);

  useEffect(() => {
    if (pauseOnHover && isHovering) return;

    const interval = setInterval(() => {
      setActiveBit((prev) => (prev + 1) % childrenCount);
    }, delay);

    return () => clearInterval(interval);
  }, [childrenCount, delay, pauseOnHover, isHovering]);

  const handleCardClick = useCallback(
    (originalIndex: number, visualIndex: number) => {
      if (onCardClick) onCardClick(originalIndex);

      if (clickToSwap && visualIndex !== 0) {
        setActiveBit((prev) => (prev + visualIndex) % childrenCount);
      }
    },
    [onCardClick, clickToSwap, childrenCount],
  );

  return (
    <Stack
      width="100%"
      height="100%"
      sx={{
        position: "relative",
        perspective: "900px",
        transformStyle: "preserve-3d",
        ...sx,
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      {...props}
    >
      {childrenArray.map((child, i) => {
        const visualIndex = (i - activeBit + childrenCount) % childrenCount;

        return (
          <CardSwapItemWidget
            key={i}
            visualIndex={visualIndex}
            total={childrenCount}
            cardDistance={cardDistance}
            verticalDistance={verticalDistance}
            rotateY={rotateY}
            onClick={() => handleCardClick(i, visualIndex)}
          >
            {child}
          </CardSwapItemWidget>
        );
      })}
    </Stack>
  );
};
