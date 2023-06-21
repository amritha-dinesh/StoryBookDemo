import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import SearchBar from "./SearchBar";

describe("SearchBar", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<SearchBar />);
    const searchBar = getByTestId("search-bar");

    expect(searchBar).toBeTruthy();
  });

  it("calls onChangeText correctly", () => {
    const onChangeText = jest.fn();
    const { getByTestId } = render(<SearchBar onChangeText={onChangeText} />);
    const input = getByTestId("search-input");

    fireEvent.changeText(input, "example");

    expect(onChangeText).toHaveBeenCalledWith("example");
  });

  it("calls onCancel correctly", () => {
    const onCancel = jest.fn();
    const { getByTestId } = render(
      <SearchBar onCancel={onCancel} platform="ios" showCancel />
    );
    const cancelButton = getByTestId("cancel-button");

    fireEvent.press(cancelButton);

    expect(onCancel).toHaveBeenCalled();
  });
});
