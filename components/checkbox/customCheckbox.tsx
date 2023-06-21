import React, { useState } from "react";
import {
  Text,
  Image,
  TouchableOpacity,
  ColorValue,
  ImageSourcePropType,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { black, grey500 } from "../styles/themes/colors";

const DEFAULT_SIZE = 40;
const DEFAULT_SPACE = 10;

interface CustomCheckBoxProps {
  testID?: string;
  label?: string;
  value?: boolean;
  onValueChanged?: (value: boolean) => void;
  disabled?: boolean;
  labelColor?: ColorValue;
  fillColor?: ColorValue;
  disabledColor?: ColorValue;
  labelFontSize?: number;
  spaceBetweenLabelAndCheckBox?: number;
  checkedImage?: ImageSourcePropType;
  unCheckedImage?: ImageSourcePropType;
  size?: number;
  labelFontFamily?: string | undefined;
  position?: "left" | "right";
}

export const CustomCheckBox: React.FC<CustomCheckBoxProps> = ({
  testID = "custom-checkbox",
  label = "label",
  value = false,
  onValueChanged = () => {
    "true";
  },
  disabled = false,
  labelColor = black,
  fillColor = grey500,
  disabledColor = grey500,
  labelFontSize,
  spaceBetweenLabelAndCheckBox = DEFAULT_SPACE,
  checkedImage,
  unCheckedImage,
  size = DEFAULT_SIZE,
  labelFontFamily,
  position = "left",
}) => {
  const [checked, setChecked] = useState(value);

  return (
    <SafeAreaView
      style={[
        styles.container,
        { flexDirection: position === "left" ? "row" : "row-reverse" },
      ]}
    >
      <TouchableOpacity
        testID={testID}
        disabled={disabled}
        onPress={() => {
          onValueChanged(!checked);
          setChecked(!checked);
        }}
        activeOpacity={0.8}
      >
        <Image
          source={
            checked
              ? checkedImage || require("../assets/fillChecked.png")
              : unCheckedImage || require("../assets/unchecked.png")
          }
          style={{
            width: size,
            height: size,
            tintColor: checkedImage ? "" : checked ? fillColor : grey500,
          }}
        />
      </TouchableOpacity>

      <Text
        style={{
          color: disabled ? disabledColor : labelColor,
          fontSize: labelFontSize,
          marginHorizontal: spaceBetweenLabelAndCheckBox,
          fontFamily: labelFontFamily,
        }}
      >
        {label}
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    alignSelf: "flex-start",
  },
  checkboxContainer: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  checkIcon: {
    alignSelf: "center",
  },
});

export default CustomCheckBox;
