import { useEffect, useRef, useState } from "react";

import type { HeaderWidgetPropsType } from "./types";
import { cx } from "@styled-system/css";
import { styled } from "@styled-system/jsx";
import { headerWidget } from "@styled-system/recipes";

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
  const styles = headerWidget();

  const headerRef = useRef<HTMLDivElement | null>(null);

  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    if (!headerRef.current) return;

    const measure = () => {
      const hHeight = headerRef.current?.offsetHeight || 0;
      setHeaderHeight(hHeight);
      document.documentElement.style.setProperty(
        "--header-height",
        `${hHeight}px`,
      );
    };

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(headerRef.current);
    window.addEventListener("resize", measure);
    measure();

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const threshold =
    typeof window !== "undefined" ? window.innerHeight - headerHeight : 10;
  const triggered = useScrollPosition(threshold > 0 ? threshold : 10);

  const subcontent = (
    <styled.div className={styles.subcontent}>
      <styled.div className={styles.navigation}>{navigation}</styled.div>

      <styled.div className={styles.actions}>{actions}</styled.div>
    </styled.div>
  );

  const { className, ...restProps } = props;

  return (
    <styled.header
      ref={headerRef}
      className={cx(styles.root, className)}
      color={triggered ? "text.dark" : "text.light"}
      {...restProps}
    >
      <styled.div className={styles.content}>
        <styled.div>{brand}</styled.div>

        <styled.div className={styles.flatContent}>{subcontent}</styled.div>

        <styled.button className={styles.menuButton}>MenuIcon</styled.button>
      </styled.div>
    </styled.header>
  );
};
