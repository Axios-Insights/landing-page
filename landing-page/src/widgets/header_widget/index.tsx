import { Children, useEffect, useMemo, useRef, useState } from "react";

import type { HeaderWidgetPropsType } from "./types";
import { Flex, HStack, Stack } from "@styled-system/jsx";
import { css, cx } from "@styled-system/css";
import { styled } from "@styled-system/jsx";

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
  className,
  ...props
}: HeaderWidgetPropsType) => {
  const headerRef = useRef<HTMLDivElement | null>(null);

  const [headerHeight, setHeaderHeight] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

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

  const headerStyle = css({
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    transition: "color 0.3s ease-in-out",
    color: triggered ? "text.light" : "text.dark",
    backgroundColor: "transparent",

    _before: {
      content: '""',
      position: "absolute",
      inset: 0,
      zIndex: -1,
      backgroundColor: "transparent",
      backdropFilter: "blur(4px)",
      maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
      WebkitMaskImage:
        "linear-gradient(to bottom, black 50%, transparent 100%)",
      transition: "backdrop-filter 0.3s ease-in-out",
    },
  });

  const drawerOverlayStyles = css({
    position: "fixed",
    inset: 0,
    zIndex: 100,
    bg: "black/50",
    backdropFilter: "blur(4px)",
    display: drawerOpen ? "block" : "none",
    md: { display: "none" },
  });

  const drawerContentStyles = css({
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    width: "80%",
    maxWidth: "300px",
    bg: "white",
    p: 6,
    boxShadow: "lg",
    transition: "transform 0.3s ease-in-out",
    transform: drawerOpen ? "translateX(0)" : "translateX(100%)",
  });

  const content = (
    <Stack
      direction={{ base: "column", md: "row" }}
      gap={{ base: 4, md: 8 }}
      alignItems="center"
    >
      <Stack
        direction={{ base: "column", md: "row" }}
        gap={{ base: 1.5, md: 3 }}
      >
        {navigation}
      </Stack>

      <styled.div className={css({ display: { base: "none", md: "block" } })}>
        {actions}
      </styled.div>
    </Stack>
  );

  return (
    <>
      <HStack
        as="header"
        ref={headerRef}
        className={cx(headerStyle, className)}
        {...props}
      >
        <Flex
          width="100%"
          justify="space-between"
          alignItems="center"
          padding="16px 32px"
          minHeight="auto"
        >
          <styled.div>{brand}</styled.div>

          <styled.div display={{ base: "none", md: "block" }}>
            {content}
          </styled.div>

          <styled.button
            onClick={() => setDrawerOpen(true)}
            display={{ base: "block", md: "none" }}
            cursor="pointer"
          >
            MenuIcon
          </styled.button>
        </Flex>
      </HStack>

      {drawerOpen && (
        <styled.div
          className={drawerOverlayStyles}
          onClick={() => setDrawerOpen(false)}
        >
          <styled.div
            className={drawerContentStyles}
            onClick={(e) => e.stopPropagation()}
          >
            <Flex justify="flex-end" marginBottom={4}>
              <styled.button
                onClick={() => setDrawerOpen(false)}
                cursor="pointer"
              >
                CloseIcon
              </styled.button>
            </Flex>
          </styled.div>
          {content}
        </styled.div>
      )}
    </>
  );
};
