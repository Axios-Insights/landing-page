import chroma from "chroma-js";

export interface GenerateScaleOptions {
  range: number;
  base: number;
  unit?: "px";
}

export interface ScaleOptions {
  anchors: string[];
  keys: (string | number)[];
  mode?: chroma.InterpolationMode;
}
