import { styled } from "@styled-system/jsx";
import type { LogoWidgetPropsType } from "./types";

export const LogoWidget = ({
  fontSize = 24,
  color = "inherit",
  className,
  ...props
}: LogoWidgetPropsType) => {
  return (
    <styled.span
      fontSize={fontSize}
      color={color}
      className={className}
      {...props}
    >
      <b>axios</b> insights
    </styled.span>
  );
};
