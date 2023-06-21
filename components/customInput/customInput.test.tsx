/**
 * @format
 */

import { Platform } from "react-native";
import React from "react";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react-native";
import CustomInput from "./customInput";
// Note: test renderer must be required after react-native.

describe("CustomInput Component", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<CustomInput />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly find", () => {
    const { getByTestId } = render(<CustomInput />);
    const customInputComponent = getByTestId("custom-input");
    expect(customInputComponent).toBeDefined();
  });

  it("renders custom input mode by default", () => {
    const { getByTestId } = render(<CustomInput />);
    const filledStyle = {
      borderBottomWidth: Platform.OS === "ios" ? 1 : 0.5,
      backgroundColor: "#e8e8e8",
    };
    const customInputComponent = getByTestId("custom-input");
    expect(customInputComponent.props.style[1]).toEqual(filledStyle);
  });

  it("renders disabled cusom input when mode prop is outlined", () => {
    const { getByTestId } = render(<CustomInput mode="outlined" />);
    const outlinedStyle = {
      borderWidth: Platform.OS === "ios" ? 1 : 0.5,
      backgroundColor: "transparent",
    };
    const customInputComponent = getByTestId("custom-input");
    expect(customInputComponent.props.style[1]).toEqual(outlinedStyle);
  });

  it("enders disabled cusom input when mode prop is standard", () => {
    const { getByTestId } = render(<CustomInput mode="standard" />);
    const standardStyle = {
      borderBottomWidth: Platform.OS === "ios" ? 1 : 0.5,
      backgroundColor: "transparent",
    };
    const customInputComponent = getByTestId("custom-input");
    expect(customInputComponent.props.style[1]).toEqual(standardStyle);
  });

  it("renders enabled custom input by default", () => {
    const { getByTestId } = render(<CustomInput />);
    const customInputComponent = getByTestId("custom-input");
    expect(customInputComponent.props.editable).toBeTruthy();
  });

  it("renders disabled cusom input when disabled prop is true", () => {
    const { getByTestId } = render(<CustomInput disabled={true} />);
    const customInputComponent = getByTestId("custom-input");
    expect(customInputComponent.props.editable).toBeFalsy();
  });

  it("renders custom input passwordForm by default", () => {
    const { getByTestId } = render(<CustomInput />);
    const customInputComponent = getByTestId("custom-input");
    expect(customInputComponent.props.secureTextEntry).toBeFalsy();
  });

  it("renders disabled cusom input when passwordForm prop is true", () => {
    const { getByTestId } = render(<CustomInput passwordForm={true} />);
    const customInputComponent = getByTestId("custom-input");
    expect(customInputComponent.props.secureTextEntry).toBeTruthy();
  });

  it("renders enabled custom input keyboardType by default", () => {
    const { getByTestId } = render(<CustomInput />);
    const keyboardType = "default";
    const customInputComponent = getByTestId("custom-input");
    expect(customInputComponent.props.keyboardType).toBe(keyboardType);
  });

  it("renders disabled cusom input when keyboardType prop is numeric", () => {
    const { getByTestId } = render(<CustomInput keyboardType="numeric" />);
    const keyboardType = "numeric";
    const customInputComponent = getByTestId("custom-input");
    expect(customInputComponent.props.keyboardType).toBe(keyboardType);
  });

  it("renders disabled cusom input label by default", () => {
    const { getByTestId } = render(<CustomInput />);
    const label = "Label Name";
    const customInputComponent = getByTestId("label");
    expect(customInputComponent.props.children).toBe(label);
  });

  it("renders disabled cusom input placeholder by default", () => {
    const { getByTestId } = render(<CustomInput />);
    const placeholder = "placeholder";
    const customInputComponent = getByTestId("custom-input");
    expect(customInputComponent.props.placeholder).toBe(placeholder);
  });
});
