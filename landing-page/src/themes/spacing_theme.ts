const spacingRange = 20;
const spacingBase = 8;

export const spacing = Object.fromEntries(
  Array.from(
    { length: spacingRange * 2 + 1 },
    (_, i) => i - spacingRange,
  ).flatMap((n) =>
    n === spacingRange
      ? [[`${n}`, { value: `${n * spacingBase}px` }]]
      : [
          [`${n}`, { value: `${n * spacingBase}px` }],
          [`${n}.5`, { value: `${(n + 0.5) * spacingBase}px` }],
        ],
  ),
);
