import { cx } from "@styled-system/css";
import { styled } from "@styled-system/jsx";
import { sectionWidget } from "@styled-system/recipes";

import type { SectionWidgetPropsType } from "./types";

export const SectionWidget = ({
  children,
  applyHeaderOffset = true,
  ...props
}: SectionWidgetPropsType) => {
  const styles = sectionWidget();

  const { className, ...restProps } = props;

  return (
    <styled.section
      className={cx(styles.root, className)}
      paddingTop={applyHeaderOffset ? "var(--nav-height)" : undefined}
      {...restProps}
    >
      {children}
    </styled.section>
  );
};
