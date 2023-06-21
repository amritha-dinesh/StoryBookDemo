import * as React from "react";
import { render } from "@testing-library/react-native";
import CustomButton from "./customButton";

it("renders text button by default", () => {
  const tree = render(<CustomButton buttonTitle="helloworld" />).toJSON();
  expect(tree).toMatchSnapshot();
});
it("renders text button with mode", () => {
  const tree = render(
    <CustomButton buttonTitle="helloworld" mode="text" />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it("renders contained button with mode", () => {
  const tree = render(
    <CustomButton mode="contained" buttonTitle="helloworld" />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it("renders disabled button", () => {
  const tree = render(
    <CustomButton disabled buttonTitle="helloworld" />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
it("renders button with custom testID", () => {
  const tree = render(
    <CustomButton testID={"custom:testID"} buttonTitle="helloworld" />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it("renders button with an accessibility label", () => {
  const tree = render(<CustomButton accessibilityLabel={"label"} />).toJSON();

  expect(tree).toMatchSnapshot();
});

it("renders button with an accessibility hint", () => {
  const tree = render(<CustomButton accessibilityHint={"hint"} />).toJSON();
  expect(tree).toMatchSnapshot();
});
it("renders button with an icon ", () => {
  const tree = render(<CustomButton icon={true} />).toJSON();
  expect(tree).toMatchSnapshot();
});
it("renders button with an indicator ", () => {
  const tree = render(<CustomButton loading={true} />).toJSON();
  expect(tree).toMatchSnapshot();
});
