import { Chip, Text } from "@components";

export const Hero = () => {
  return (
    <section>
      <Chip variant="secondary">
        Software Engineer at The Farmer’s Dog
      </Chip>
      <Text size="lg" as="h1" weight="bold">
        Hi! I’m Test.
      </Text>
      <Text as="p" size="sm">
        Passionate software engineer with expertise in React, TypeScript,
        and Next.js. Focused on building high-performance web applications
        and component libraries.
      </Text>
    </section>
  );
};
