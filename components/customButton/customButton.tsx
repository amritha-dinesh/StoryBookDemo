import React from 'react';
import {
  View,
  ActivityIndicator,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {ButtonMode, getButtonColors} from './utils';

interface buttonProps {
  mode?: ButtonMode;
  color?: string;
  buttonColor?: string;
  buttonTitle?: string;
  disabled?: boolean;
  accessibilityLabel?: string;
  accessibilityHint?: string;
  testID?: string;
  textColor?: string;
  icon?: boolean;
  loading?: boolean;
  contentStyle?: StyleProp<ViewStyle>;
  textContentStyle?: StyleProp<TextStyle>;
}
export const CustomButton: React.FC<buttonProps> = ({
  disabled,
  textContentStyle,
  mode = 'text',
  color,
  icon,
  loading,
  buttonTitle,
  accessibilityLabel,
  accessibilityHint,
  testID = 'button',
  buttonColor,
  contentStyle,
}) => {
  const {backgroundColor, borderColor, textColor, borderWidth, borderRadius} =
    getButtonColors({
      mode,
      buttonColor,
      color,
      disabled,
    });

  return (
    <View style={styles.contentStyle}>
      <TouchableOpacity
        onPress={() => console.log('enter here')}
        style={[
          {
            backgroundColor,
            borderColor,
            borderWidth,
            borderRadius,
          },
        ]}
        testID={testID}
        accessibilityLabel={accessibilityLabel}
        accessibilityHint={accessibilityHint}
        disabled={disabled}>
        <View style={styles.innerContentStyle}>
          {icon ? (
            <View testID={`${testID}-icon-container`} style={contentStyle}>
              <Image
                style={styles.iconStyle}
                source={require('../assets/settings.png')}
              />
            </View>
          ) : null}
          {loading ? (
            <ActivityIndicator color={'black'} style={styles.iconStyle} />
          ) : null}
          <Text
            testID={`${testID}-text`}
            accessibilityLabel={`${accessibilityLabel}-text`}
            accessibilityHint={`${accessibilityHint}-text`}
            style={[
              styles.buttonTextStyle,
              textContentStyle,
              {color: textColor},
            ]}>
            {buttonTitle}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  contentStyle: {
    alignItems: 'center',
  },
  iconStyle: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  innerContentStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTextStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});
