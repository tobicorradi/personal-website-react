import { Button, Chip, Text } from "@components";
import { MoveUpRight } from "lucide-react";

import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.section}>
      <Chip variant="secondary">Software Engineer at Rootstrap</Chip>
      <Text className={styles.heading} size="lg" as="h1" weight="bold">
        Hi! I’m Toby.
      </Text>
      <Text className={styles.copy} as="p" size="sm">
        Passionate software engineer with expertise in React, TypeScript,
        and Next.js. Focused on building high-performance web applications
        and component libraries.
      </Text>
      <div className={styles.actions}>
        <Button size="xs" variant="primary">
          Contact
        </Button>
        <Button size="xs" icon={MoveUpRight} variant="transparent">
          LinkedIn
        </Button>
      </div>
    </section>
  );
};
