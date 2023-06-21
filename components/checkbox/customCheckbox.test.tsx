import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import CustomCheckBox from "./customCheckbox";

describe("CustomCheckbox", () => {
  it("should match the snapshot", () => {
    const { toJSON } = render(<CustomCheckBox />);
    expect(toJSON()).toMatchSnapshot();
  });

  it("renders correctly", () => {
    const { getByTestId } = render(<CustomCheckBox />);
    const customCheckboxComponent = getByTestId("custom-checkbox");
    expect(customCheckboxComponent).toBeDefined();
  });

  it("should toggle the checkbox when clicked", () => {
    const onChangeMock = jest.fn();
    const { getByTestId } = render(
      <CustomCheckBox value={false} onValueChanged={onChangeMock} />
    );
    const checkbox = getByTestId("custom-checkbox");
    fireEvent.press(checkbox);
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith(true);
  });

  it("should not toggle the checkbox when clicked", () => {
    const onChangeMock = jest.fn();
    const { getByTestId } = render(
      <CustomCheckBox
        value={false}
        disabled={true}
        onValueChanged={onChangeMock}
      />
    );
    const checkbox = getByTestId("custom-checkbox");
    fireEvent.press(checkbox);
    expect(onChangeMock).toHaveBeenCalledTimes(0);
  });
});
