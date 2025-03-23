import { type HTMLAttributes } from "react";
import classNames from "classnames";

import styles from "./Text.module.css";

export type TextTag =
  | "p"
  | "span"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6";

export type TextSize = "xs" | "sm" | "md" | "lg" | "xl";
export type TextWeight = "normal" | "medium" | "bold";
export type TextColor = "primary" | "gray" | "muted" | "white";
export type TextAlign = "left" | "center" | "right";

interface TextProps extends HTMLAttributes<HTMLElement> {
  as?: TextTag;
  size?: TextSize;
  weight?: TextWeight;
  color?: TextColor;
  align?: TextAlign;
  italic?: boolean;
  underline?: boolean;
}

export const Text = ({
  as: Component = "p",
  size = "md",
  weight = "normal",
  color = "gray",
  align,
  italic,
  underline,
  className,
  children,
  ...rest
}: TextProps) => {
  return (
    <Component
      className={classNames(
        styles.text,
        styles[size],
        styles[`weight-${weight}`],
        styles[`color-${color}`],
        align && styles[`align-${align}`],
        italic && styles.italic,
        underline && styles.underline,
        className
      )}
      {...rest}
    >
      {children}
    </Component>
  );
};
