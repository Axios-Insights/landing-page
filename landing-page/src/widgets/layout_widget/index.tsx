import { FooterWidget } from "@widgets/footer_widget";

import { styled } from "@styled-system/jsx";

import type { LayoutWidgetPropsType } from "./types";
import { cx } from "@styled-system/css";
import { layoutWidget } from "@styled-system/recipes";

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
