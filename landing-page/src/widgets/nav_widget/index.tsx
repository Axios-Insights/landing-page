
import { cx } from "@styled-system/css";
import { styled } from "@styled-system/jsx";
import { navWidget } from "@styled-system/recipes";
import { useEffect, useRef, useState } from "react";

import type { HeaderWidgetPropsType } from "./types";

const useScrollPosition = (threshold = 10) => {
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setTriggered(window.scrollY > threshold);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return triggered;
};

export const HeaderWidget = ({
  brand,
  navigation,
  actions,

  ...props
}: HeaderWidgetPropsType) => {
  const styles = navWidget();

  const navRef = useRef<HTMLDivElement | null>(null);

  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    if (!navRef.current) return;

    const measure = () => {
      const hHeight = navRef.current?.offsetHeight || 0;

      setNavHeight(hHeight);

      document.documentElement.style.setProperty(
        "--nav-height",
        `${hHeight}px`,
      );
    };

    const resizeObserver = new ResizeObserver(measure);

    resizeObserver.observe(navRef.current);
    window.addEventListener("resize", measure);

    measure();

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const threshold =
    typeof window !== "undefined" ? window.innerHeight - navHeight : 10;
  const triggered = useScrollPosition(threshold > 0 ? threshold : 10);

  const subcontent = (
    <styled.div className={styles.subcontent}>
      <styled.div className={styles.navigation}>{navigation}</styled.div>

      <styled.div className={styles.actions}>{actions}</styled.div>
    </styled.div>
  );

  const { className, ...restProps } = props;

  return (
    <styled.nav
      ref={navRef}
      className={cx(styles.root, className)}
      color={triggered ? "text.dark" : "text.light"}
      {...restProps}
    >
      <styled.div className={styles.content}>
        <styled.div>{brand}</styled.div>

        <styled.div className={styles.flatContent}>{subcontent}</styled.div>

        <styled.button className={styles.menuButton}>MenuIcon</styled.button>
      </styled.div>
    </styled.nav>
  );
};
