interface GenerateScaleOptions {
  range: number;
  base: number;
  unit?: "px";
}

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
