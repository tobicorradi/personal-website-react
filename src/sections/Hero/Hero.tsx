import { Button, Chip, Text } from "@components";
import { MoveUpRight } from "lucide-react";

import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.section}>
      <Chip variant="secondary">
        Software Engineer at The Farmer’s Dog
      </Chip>
      <Text className={styles.heading} size="lg" as="h1" weight="bold">
        Hi! I’m Test.
      </Text>
      <Text className={styles.copy} as="p" size="sm">
        Passionate software engineer with expertise in React, TypeScript,
        and Next.js. Focused on building high-performance web applications
        and component libraries.
      </Text>
      <Button variant="primary">Contact</Button>
      <Button icon={MoveUpRight} variant="transparent">
        LinkedIn
      </Button>
    </section>
  );
};
