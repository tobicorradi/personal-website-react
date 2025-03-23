import classNames from "classnames";
import { Text } from "@components";
import { type LucideIcon } from "lucide-react";

import styles from "./Button.module.css";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  icon?: LucideIcon;
  children: React.ReactNode;
  variant: "primary" | "transparent";
}

export const Button = ({
  variant,
  children,
  icon: IconComponent,
  ...rest
}: ButtonProps) => {
  const classnames = classNames(
    styles.button,
    variant === "primary" && styles.primary,
    variant === "transparent" && styles.transparent,
    IconComponent && styles.withIcon,
    rest.className
  );

  const textColor = variant === "transparent" ? "gray" : "white";
  const iconStroke = variant === "transparent" ? "#494949" : "white";

  // TODO: add anchor tag support

  return (
    <button type="button" className={classnames} {...rest}>
      <Text color={textColor} size="xs">
        {children}
      </Text>
      {IconComponent && <IconComponent size="18" stroke={iconStroke} />}
    </button>
  );
};
