import { defineSemanticTokens, defineTokens } from "@pandacss/dev";
import { generateColorScale } from "@utils/theme";

const scaleKeys = Array.from({ length: 13 }, (_, i) => i - 1);

const middleIndex = Math.floor(scaleKeys.length / 2);
const firstScaleKey = scaleKeys[0]!;
const middleScaleKey = scaleKeys[middleIndex]!;
const lastScaleKey = scaleKeys.at(-1)!;

const omitKeys = <T extends Record<string, { value: string }>>(
  obj: T,
  keysToRemove: number[],
): Partial<T> => {
  return Object.fromEntries(
    Object.entries(obj).filter(([key]) => !keysToRemove.includes(Number(key))),
  ) as Partial<T>;
};

const primaryColorScale = generateColorScale({
  anchors: ["#151515", "#FF6E00", "#FAFAFA"],
  keys: scaleKeys,
});

const greyColorScale = generateColorScale({
  anchors: ["#151515", "#FAFAFA"],
  keys: scaleKeys,
});

export const colors = defineTokens.colors({
  primary: {
    value: primaryColorScale[middleScaleKey]!.value,
    ...omitKeys(primaryColorScale, [firstScaleKey, lastScaleKey]),
  },
  dark: {
    value: greyColorScale[firstScaleKey]!.value,
  },
  grey: {
    value: greyColorScale[middleScaleKey]!.value,
    ...omitKeys(greyColorScale, [firstScaleKey, lastScaleKey]),
  },
  light: {
    value: greyColorScale[lastScaleKey]!.value,
  },
});

export const semanticColors = defineSemanticTokens.colors({
  primary: { contrast: { value: "{colors.light}" } },
  background: {
    dark: { value: "{colors.dark}" },
    light: { value: "{colors.light}" },
  },
  text: {
    dark: { value: "{colors.dark}" },
    light: { value: "{colors.light}" },
  },
});
