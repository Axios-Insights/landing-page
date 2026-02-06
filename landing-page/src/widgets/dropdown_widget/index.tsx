import { styled } from "@styled-system/jsx";
import { useEffect, useState } from "react";
import { type DropdownWidgetPropsType } from "./types";
import { dropdown } from "@styled-system/recipes";
import { cx } from "@styled-system/css";
import {
  autoUpdate,
  flip,
  offset,
  shift,
  useFloating,
  useTransitionStyles,
  FloatingPortal,
} from "@floating-ui/react";

export const DropdownWidget = ({
  trigger,
  triggerStyled = {},

  children,
  childrenStyled = {},

  floatingOptions,

  ...props
}: DropdownWidgetPropsType) => {
  const styles = dropdown();

  const [isOpen, setIsOpen] = useState(false);

  const { refs, context, placement, floatingStyles } = useFloating({
    placement: "bottom",
    open: isOpen,
    onOpenChange: setIsOpen,
    whileElementsMounted: autoUpdate,
    middleware: [offset(8), flip({ padding: 10 }), shift({ padding: 10 })],
    ...floatingOptions,
  });

  const { isMounted, styles: transitionStyles } = useTransitionStyles(context, {
    duration: 150,
    initial: {
      opacity: 0,
    },
    open: {
      opacity: 1,
    },
    close: {
      opacity: 0,
    },
  });

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        refs.floating.current &&
        !refs.floating.current.contains(event.target as Node) &&
        refs.reference.current &&
        refs.reference.current instanceof HTMLElement &&
        !refs.reference.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, refs]);

  const { className, ...restProps } = props;

  const {
    width: childrenWidth,
    maxHeight: childrenMaxHeight,
    className: childrenClassName,
    style: childrenStyle,
    ...restChildrenStyled
  } = childrenStyled;

  const { className: triggerClassName, ...restTriggerStyled } = triggerStyled;

  return (
    <styled.div className={cx(styles.root, className)} {...restProps}>
      <styled.button
        ref={refs.setReference}
        className={cx(styles.trigger, triggerClassName)}
        onClick={toggleMenu}
        type="button"
        {...restTriggerStyled}
      >
        {trigger}
      </styled.button>

      {isMounted && (
        <FloatingPortal>
          <styled.div
            ref={refs.setFloating}
            className={cx(styles.content, childrenClassName)}
            data-placement={placement}
            style={{
              ...floatingStyles,
              ...transitionStyles,
              ...childrenStyle,

              transform: [
                floatingStyles.transform,
                transitionStyles.transform,
                childrenStyle?.transform,
              ]
                .filter(Boolean)
                .join(" "),
            }}
            width={childrenWidth || "auto"}
            maxHeight={childrenMaxHeight}
            overflowY={childrenMaxHeight ? "auto" : "visible"}
            {...restChildrenStyled}
          >
            {children}
          </styled.div>
        </FloatingPortal>
      )}
    </styled.div>
  );
};
