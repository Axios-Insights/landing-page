import chroma from "chroma-js";

import type { GenerateScaleOptions, ScaleOptions } from "./types";

export const generateScale = ({
  range,
  base,
  unit = "px",
}: GenerateScaleOptions) => {
  return Object.fromEntries(
    Array.from({ length: range * 2 + 1 }, (_, i) => i - range).flatMap((n) =>
      n === range
        ? [[`${n}`, { value: `${n * base}${unit}` }]]
        : [
            [`${n}`, { value: `${n * base}${unit}` }],
            [`${n}.5`, { value: `${(n + 0.5) * base}${unit}` }],
          ],
    ),
  );
};

export const generateColorScale = ({
  anchors,
  keys,
  mode = "lab",
}: ScaleOptions) => {
  if (anchors.length < 2) {
    throw new Error("At least 2 anchor colors are required");
  }

  const segments = anchors.length - 1;
  const totalSteps = keys.length;

  const stepsPerSegment = Math.floor(totalSteps / segments);
  const remainder = totalSteps % segments;

  const scale: string[] = [];

  for (let i = 0; i < segments; i++) {
    const extra = i < remainder ? 1 : 0;
    const steps = stepsPerSegment + extra;

    const part = chroma
      .scale([anchors[i]!, anchors[i + 1]!])
      .mode(mode)
      .correctLightness()
      .colors(steps + 1);

    if (i !== 0) part.shift();

    scale.push(...part);
  }

  const anchorPositions = anchors.map((_, i) =>
    Math.round((i / (anchors.length - 1)) * (totalSteps - 1)),
  );

  anchorPositions.forEach((pos, i) => {
    scale[pos] = anchors[i]!;
  });

  return Object.fromEntries(keys.map((key, i) => [key, { value: scale[i]! }]));
};
