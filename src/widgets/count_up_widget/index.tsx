/**
 * Based on components from the React Bits project
 * https://github.com/DavidHDev/react-bits
 *
 * Modified by: Dainel Torquato - danieltorquatof
 */

import { useCallback, useEffect, useMemo, useRef } from "react";

import { Typography } from "@mui/material";
import { useInView, useMotionValue, useSpring } from "motion/react";
import { useTranslation } from "react-i18next";

import type { CountUpWidgetPropsType } from "./types";

export const CountUpWidget = ({
  to,
  from = 0,
  direction = "up",
  delay = 0,
  duration = 1,
  startWhen = true,
  onStart,
  onEnd,
  prefix = "",
  suffix = "",
  sx,
  ...props
}: CountUpWidgetPropsType) => {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;

  const typographyRef = useRef<HTMLSpanElement | null>(null);

  const initialValue = direction === "down" ? to : from;
  const targetValue = direction === "down" ? from : to;

  const motionValue = useMotionValue(initialValue);

  const springConfig = useMemo(
    () => ({
      damping: 20 + 40 * (1 / duration),
      stiffness: 100 * (1 / duration),
    }),
    [duration],
  );

  const springValue = useSpring(motionValue, springConfig);
  const isInView = useInView(typographyRef, { once: true, margin: "0px" });

  const maxDecimals = useMemo(() => {
    const getDecimalPlaces = (num: number) => {
      const str = num.toString();
      const parts = str.split(".");
      return parts.length > 1 && parseInt(parts[1]) !== 0 ? parts[1].length : 0;
    };
    return Math.max(getDecimalPlaces(from), getDecimalPlaces(to));
  }, [from, to]);

  const formatter = useMemo(() => {
    const hasDecimals = maxDecimals > 0;

    return new Intl.NumberFormat(currentLocale, {
      useGrouping: true,
      minimumFractionDigits: hasDecimals ? maxDecimals : 0,
      maximumFractionDigits: hasDecimals ? maxDecimals : 0,
    });
  }, [maxDecimals, currentLocale]);

  const updateText = useCallback(
    (value: number) => {
      if (!typographyRef.current) return;

      const formattedNumber = formatter.format(value);

      typographyRef.current.textContent = `${prefix}${formattedNumber}${suffix}`;
    },
    [formatter, prefix, suffix],
  );

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest: number) => {
      updateText(latest);
    });

    updateText(springValue.get());

    return () => unsubscribe();
  }, [springValue, updateText]);

  useEffect(() => {
    if (isInView && startWhen) {
      if (typeof onStart === "function") onStart();

      const timeoutId = setTimeout(() => {
        motionValue.set(targetValue);
      }, delay * 1000);

      const durationTimeoutId = setTimeout(
        () => {
          if (typeof onEnd === "function") onEnd();
        },
        delay * 1000 + duration * 1000,
      );

      return () => {
        clearTimeout(timeoutId);
        clearTimeout(durationTimeoutId);
      };
    }
  }, [
    isInView,
    startWhen,
    motionValue,
    targetValue,
    delay,
    onStart,
    onEnd,
    duration,
  ]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest: number) => {
      updateText(latest);
    });

    return () => unsubscribe();
  }, [springValue, updateText]);

  return <Typography ref={typographyRef} sx={sx} {...props} />;
};
