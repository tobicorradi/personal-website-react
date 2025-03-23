import { render, screen } from "@testing-library/react";
import { Text } from "./Text";

describe("<Text />", () => {
  test("renders with default props", () => {
    render(<Text>Default text</Text>);
    const element = screen.getByText("Default text");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe("P");
  });

  test("renders as h1 when passed `as` prop", () => {
    render(<Text as="h1">Heading</Text>);
    const element = screen.getByRole("heading", { name: "Heading" });
    expect(element.tagName).toBe("H1");
  });

  test("applies bold weight", () => {
    render(<Text weight="bold">Bold text</Text>);
    const element = screen.getByText("Bold text");
    expect(element).toHaveClass("weight-bold");
  });

  test("applies color class", () => {
    render(<Text color="primary">Primary color</Text>);
    const element = screen.getByText("Primary color");
    expect(element).toHaveClass("color-primary");
  });

  test("applies italic style", () => {
    render(<Text italic>Italic text</Text>);
    const element = screen.getByText("Italic text");
    expect(element).toHaveClass("italic");
  });

  test("applies underline style", () => {
    render(<Text underline>Underlined text</Text>);
    const element = screen.getByText("Underlined text");
    expect(element).toHaveClass("underline");
  });

  test("applies text alignment", () => {
    render(<Text align="center">Centered</Text>);
    const element = screen.getByText("Centered");
    expect(element).toHaveClass("align-center");
  });

  test("combines multiple classes correctly", () => {
    render(
      <Text
        as="span"
        variant="caption"
        weight="medium"
        color="muted"
        align="right"
        italic
        underline
      >
        Combo
      </Text>
    );
    const element = screen.getByText("Combo");
    expect(element.tagName).toBe("SPAN");
    expect(element).toHaveClass(
      "caption",
      "weight-medium",
      "color-muted",
      "align-right",
      "italic",
      "underline"
    );
  });
});
