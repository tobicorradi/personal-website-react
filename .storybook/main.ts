import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-essentials"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: config => {
    config.resolve = {
      alias: {
        "@": path.resolve(__dirname, "../src"),
      },
    };
    return config;
  },
};

export default config;
