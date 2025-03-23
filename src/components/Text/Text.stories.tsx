import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  tags: ["autodocs"],
  argTypes: {
    as: {
      control: "select",
      options: ["p", "span", "div", "h1", "h2", "h3", "h4", "h5", "h6"],
    },
    variant: {
      control: "select",
      options: ["title", "subtitle", "body", "caption"],
    },
    weight: {
      control: "select",
      options: ["normal", "medium", "bold"],
    },
    color: {
      control: "select",
      options: ["primary", "gray", "muted", "white"],
    },
    align: {
      control: "inline-radio",
      options: ["left", "center", "right"],
    },
    italic: { control: "boolean" },
    underline: { control: "boolean" },
    children: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: "This is a Text component",
    as: "p",
    variant: "body",
    weight: "normal",
    color: "gray",
    align: "left",
  },
};
