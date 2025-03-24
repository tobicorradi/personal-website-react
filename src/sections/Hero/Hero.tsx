import { Button, Chip, Text } from "@components";
import { MoveUpRight } from "lucide-react";

import Image from "./assets/hero-image.jpg";

import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.section}>
      <Chip variant="secondary">
        Software Engineer at The Farmer's Dog
      </Chip>
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
      <div className={styles.numbers}>
        <div>
          <Text weight="bold" size="sm">
            100%
          </Text>
          <Text size="xs">remote</Text>
        </div>
        <div>
          <Text weight="bold" size="sm">
            +5
          </Text>
          <Text size="xs">years of exp.</Text>
        </div>
        <div>
          <Text weight="bold" size="sm">
            +20
          </Text>
          <Text size="xs">projects</Text>
        </div>
      </div>
      <img className={styles.image} src={Image} alt="CHANGE" />
    </section>
  );
};
