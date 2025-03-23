import { Text } from "@components";
import classNames from "classnames";

import styles from "./Chip.module.css";

interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
  children: string;
  variant: "primary" | "secondary";
}

export const Chip = ({ children, variant, ...rest }: ChipProps) => {
  const classnames = classNames(
    styles.chip,
    variant === "primary" && styles.primary,
    variant === "secondary" && styles.secondary,
    rest.className
  );

  return (
    <div {...rest} className={classnames}>
      <Text weight="medium" color="white" size="xs">
        {children}
      </Text>
    </div>
  );
};
