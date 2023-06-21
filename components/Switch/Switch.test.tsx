import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Switch from "./Switch";

describe("Switch component", () => {
  it("renders correctly with image content when enabled", () => {
    const { getByTestId } = render(
      <Switch value={true} onValueChange={() => {}} content="image" />
    );
    const image = getByTestId("switch-image");
    expect(image.props.source).toEqual(require("../../assets/enabled.png"));
  });

  it("renders correctly with text content when disabled", () => {
    const { getByText } = render(
      <Switch value={false} onValueChange={() => {}} content="text" />
    );
    const text = getByText("OFF");
    expect(text).toBeTruthy();
  });

  it("triggers onValueChange callback when pressed", () => {
    let value = false;
    const onValueChange = (newValue: boolean) => {
      value = newValue;
    };
    const { getByTestId } = render(
      <Switch value={value} onValueChange={onValueChange} />
    );
    const switchComponent = getByTestId("switch-component");
    fireEvent.press(switchComponent);
    expect(value).toBe(true);
  });

  it("renders disabled style when disabled prop is true", () => {
    const { getByTestId } = render(
      <Switch
        value={true}
        onValueChange={() => {}}
        disabled={true}
        disabledStyle={{ backgroundColor: "#888" }}
      />
    );
    const container = getByTestId("switch-container");
    const containerStyle = container.props.style;
    expect(containerStyle).toHaveProperty("backgroundColor", "#888");
  });
});
