import { cx } from "@styled-system/css";
import { styled } from "@styled-system/jsx";
import { layoutWidget } from "@styled-system/recipes";
import { FooterWidget } from "@widgets/footer";

import type { LayoutWidgetPropsType } from "./types";

export const LayoutWidget = ({
  children,
  activeFooter = true,
  ...props
}: LayoutWidgetPropsType) => {
  const styles = layoutWidget();

  const { className, ...restProps } = props;

  return (
    <styled.main className={cx(styles.root, className)} {...restProps}>
      {children}

      {activeFooter && <FooterWidget />}
    </styled.main>
  );
};
