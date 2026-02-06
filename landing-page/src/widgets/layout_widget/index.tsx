import { FooterWidget } from "@widgets/footer_widget";

import { VStack } from "@styled-system/jsx";

import type { LayoutWidgetPropsType } from "./types";

export const LayoutWidget = ({
  children,
  activeFooter = true,
  className,
  ...props
}: LayoutWidgetPropsType) => {
  return (
    <VStack
      as="main"
      minHeight="100dvh"
      width="100%"
      gap={0}
      className={className}
      {...props}
    >
      {children}

      {activeFooter && <FooterWidget />}
    </VStack>
  );
};
