import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { Camera } from "lucide-react";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["primary", "transparent"],
    },
    children: {
      control: "text",
    },
    icon: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Button",
  },
};

export const Transparent: Story = {
  args: {
    variant: "transparent",
    children: "Transparent Button",
  },
};

export const WithIconPrimary: Story = {
  args: {
    variant: "primary",
    children: "Button with Icon",
    icon: Camera,
  },
};

export const WithIconTransparent: Story = {
  args: {
    variant: "transparent",
    children: "Button with Icon",
    icon: Camera,
  },
};
