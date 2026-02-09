import { faSquareLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cx } from "@styled-system/css";
import { styled } from "@styled-system/jsx";
import { footerWidget } from "@styled-system/recipes";
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

export const FooterWidget = (props: FooterWidgetPropsType) => {
  const styles = footerWidget();

  const currentYear = new Date().getFullYear();

  const { className, ...restProps } = props;

  return (
    <styled.footer className={cx(styles.root, className)} {...restProps}>
      <Link alignSelf="center" href="/">
        <LogoWidget fontSize={32} />
      </Link>

      <styled.hr className={styles.divider} />

      <Link
        alignSelf="center"
        href="https://www.linkedin.com/company/axios-insights"
        target="_blank"
        aria-label="LinkedIn"
      >
        <FontAwesomeIcon icon={faSquareLinkedin} className={styles.linkIcon} />
      </Link>

      <styled.p className={styles.copyrightNotice}>
        {"Copyright © "}
        {currentYear}
      </styled.p>
    </styled.footer>
  );
};
