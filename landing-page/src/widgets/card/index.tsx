import { cx } from "@styled-system/css";
import { styled } from "@styled-system/jsx";
import { cardWidget } from "@styled-system/recipes";

import type { CardWidgetPropsType } from "./types";

export const CardWidget = ({
  children,
  variant,
  ...props
}: CardWidgetPropsType) => {
  const styles = cardWidget({
    variant,
  });

  const { className, ...restProps } = props;

  return (
    <styled.div className={cx(styles.root, className)} {...restProps}>
      {children}
    </styled.div>
  );
};
