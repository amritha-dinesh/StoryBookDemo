import React, {useState} from 'react';
import {
  TouchableOpacity,
  ViewStyle,
  StyleSheet,
  Image,
  Text,
  ActivityIndicator,
  Platform,
  Animated,
} from 'react-native';
import {grey1000, grey1050, black, white} from '../styles/themes/colors';

interface CustomSwitchProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
  activeStyle?: ViewStyle;
  inactiveStyle?: ViewStyle;
  content?: 'image' | 'text';
  disabled?: boolean;
  disabledStyle?: ViewStyle;
  loading?: boolean;
  indicatorColor?: string;
}

export const Switch: React.FC<CustomSwitchProps> = ({
  value,
  onValueChange,
  activeStyle,
  inactiveStyle,
  content = '',
  disabled = false,
  disabledStyle,
  loading = false,
  indicatorColor = black,
}) => {
  const [isEnabled, setIsEnabled] = useState(value);
  const switchTranslateX = useState(new Animated.Value(0))[0];

  const toggleSwitch = () => {
    const newValue = !isEnabled;
    setIsEnabled(newValue);
    onValueChange(newValue);
    Animated.timing(switchTranslateX, {
      toValue: newValue ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const switchStyle = {
    ...styles.switch,
    transform: [
      {
        translateX: switchTranslateX.interpolate({
          inputRange: [0, 1],
          outputRange: [0, Platform.OS === 'web' ? 25 : 20],
        }),
      },
    ],
  };

  return (
    <TouchableOpacity
      style={[
        styles.container,
        isEnabled ? activeStyle : inactiveStyle,
        disabled && disabledStyle,
      ]}
      onPress={toggleSwitch}
      activeOpacity={0.8}
      disabled={disabled}
      testID="switch-container">
      <Animated.View
        testID="switch-component"
        style={[switchStyle, isEnabled ? styles.switchActive : null]}>
        {loading ? (
          <ActivityIndicator
            testID="switch-indicator"
            size="small"
            color={indicatorColor}
          />
        ) : (
          <>
            {content === 'image' && (
              <Image
                testID="switch-image"
                source={
                  isEnabled
                    ? require('../assets/enabled.png')
                    : require('../assets/disabled.png')
                }
                style={styles.image}
                resizeMode="contain"
              />
            )}
            {content === 'text' && (
              <Text testID="switch-text" style={styles.text}>
                {isEnabled ? 'ON' : 'OFF'}
              </Text>
            )}
          </>
        )}
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 48,
    height: Platform.OS === 'web' ? 23 : 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: grey1050,
    justifyContent: 'center',
    backgroundColor: grey1000,
  },
  switch: {
    width: Platform.OS === 'web' ? 20 : 25,
    height: Platform.OS === 'web' ? 20 : 24,
    borderRadius: Platform.OS === 'web' ? 11 : 15,
    backgroundColor: white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  switchActive: {
    backgroundColor: white,
  },
  image: {
    width: '80%',
    height: '80%',
  },
  text: {
    fontSize: 10,
  },
});

export default Switch;
