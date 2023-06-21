import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import CustomCheckboxGroup from "./customCheckboxGroup";

describe("CustomCheckboxGroup", () => {
  it("should match the snapshot", () => {
    const listOfCheckboxes = [
      { label: "Java", value: false },
      { label: "Kotlin", value: false },
    ];
    const { toJSON } = render(
      <CustomCheckboxGroup Checkboxes={listOfCheckboxes} />
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it("renders correctly", () => {
    const { getByTestId } = render(<CustomCheckboxGroup Checkboxes={[]} />);
    const customCheckboxGroup = getByTestId("custom-checkbox-group");
    expect(customCheckboxGroup).toBeDefined();
  });

  it("should render the correct number of checkboxes", () => {
    const listOfCheckboxes = [
      { label: "Java", value: false },
      { label: "Kotlin", value: false },
    ];
    const { getAllByTestId } = render(
      <CustomCheckboxGroup Checkboxes={listOfCheckboxes} />
    );
    const checkboxes = getAllByTestId("custom-checkbox");
    expect(checkboxes.length).toBe(listOfCheckboxes.length);
  });

  it("should call onClick function when a checkbox is clicked", () => {
    const onClickMock = jest.fn();
    const listOfCheckboxes = [{ label: "Java", value: false }];
    const { getByTestId } = render(
      <CustomCheckboxGroup
        Checkboxes={listOfCheckboxes}
        onClick={onClickMock}
      />
    );
    const checkbox = getByTestId("custom-checkbox");
    fireEvent.press(checkbox);
    expect(onClickMock).toHaveBeenCalledTimes(1);
    expect(onClickMock).toHaveBeenCalledWith(listOfCheckboxes[0], true, 0);
  });
});
