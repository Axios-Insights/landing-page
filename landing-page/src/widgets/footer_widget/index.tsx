import { faSquareLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Divider, VStack } from "@styled-system/jsx";
import { styled } from "@styled-system/jsx";
import { css } from "@styled-system/css";
import { LogoWidget } from "@widgets/logo_widget";

import type { FooterWidgetPropsType } from "./types";

const Link = styled("a", {
  base: {
    cursor: "pointer",
    color: "inherit",
    transition: "opacity 0.2s",
    textDecoration: "none",
    _hover: {
      opacity: 0.8,
    },
  },
});

export const FooterWidget = ({
  className,
  ...props
}: FooterWidgetPropsType) => {
  const currentYear = new Date().getFullYear();

  return (
    <VStack
      as="footer"
      width="100%"
      height="auto"
      padding={8}
      gap={8}
      color="text.light"
      backgroundColor="background.dark"
      className={className}
      {...props}
    >
      <Link alignSelf="center" href="/">
        <LogoWidget fontSize={32} />
      </Link>

      <Divider
        width="100%"
        alignSelf="center"
        color="currentColor"
        opacity={0.25}
      />

      <Link
        alignSelf="center"
        href="https://www.linkedin.com/company/axios-insights"
        target="_blank"
        aria-label="LinkedIn"
      >
        <FontAwesomeIcon
          icon={faSquareLinkedin}
          className={css({
            width: 8,
            height: 8,
          })}
        />
      </Link>

      <styled.p alignSelf="center" color="inherit">
        {"Copyright © "}
        {currentYear}
      </styled.p>
    </VStack>
  );
};
