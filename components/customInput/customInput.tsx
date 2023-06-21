import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Platform,
  Animated,
  Image,
  StyleProp,
  TextStyle,
  TouchableOpacity,
} from 'react-native';
import {black, white, blue500} from '../styles/themes/colors';

const BORDER_RADIUS = 5;

interface CustomInputProps {
  mode?: 'outlined' | 'rounded' | 'standard';
  disabled?: boolean;
  passwordForm?: boolean;
  keyboardType?:
    | 'default'
    | 'email-address'
    | 'numeric'
    | 'phone-pad'
    | 'number-pad'
    | 'decimal-pad'
    | 'ascii-capable'
    | 'numbers-and-punctuation'
    | 'url'
    | 'name-phone-pad'
    | 'twitter'
    | 'web-search';
  label?: string;
  placeholder?: string;
  num?: boolean;
  testID?: string;
  onChangeText?: (text: string) => void;
  value?: string;
  rightIcon?: string | React.ReactElement;
  leftIcon?: React.ReactElement;
  placeholderTextColor?: string;
  numberOfLines?: number;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  multiline?: boolean;
  textAlign?: 'left' | 'center' | 'right';
  onFocus?: () => void;
  onBlur?: () => void;
  autoFocus?: boolean;
  defaultValue?: string | undefined;
  selectionColor?: string;
  labelColor?: string;
  borderRadius?: number;
  style?: StyleProp<TextStyle>;
}

export const CustomInput: React.FC<CustomInputProps> = ({
  mode = 'filled',
  style,
  disabled = false,
  passwordForm = false,
  keyboardType = 'default',
  label = 'Label Name',
  placeholder = 'placeholder',
  testID = 'custom-input',
  onChangeText,
  value,
  rightIcon,
  leftIcon,
  placeholderTextColor = 'gray',
  numberOfLines,
  autoCapitalize,
  multiline,
  textAlign,
  onFocus,
  onBlur,
  autoFocus = false,
  defaultValue,
  selectionColor,
  labelColor = black,
  borderRadius = BORDER_RADIUS,
  ...props
}) => {
  const animatedLabelStyle = new Animated.Value(1);
  const [focus, setFocus] = useState(false);
  const [icon, setIcon] = useState(false);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Animated.Text
            {...props}
            testID={'label'}
            style={[
              styles.labelStyle,
              animatedLabelStyle,
              {color: labelColor},
            ]}>
            {label}
          </Animated.Text>
          <View style={styles.inputContainer}>
            {leftIcon && <TouchableOpacity>{leftIcon}</TouchableOpacity>}
            <TextInput
              {...props}
              testID={testID}
              defaultValue={defaultValue}
              onPressIn={onBlur}
              onPressOut={onFocus}
              autoCapitalize={autoCapitalize}
              numberOfLines={numberOfLines}
              placeholderTextColor={placeholderTextColor}
              autoFocus={autoFocus}
              selectionColor={selectionColor}
              onFocus={() => {
                if (disabled === true) {
                  setFocus(false);
                } else {
                  setFocus(true);
                }
              }}
              onBlur={() => {
                setFocus(false);
              }}
              multiline={multiline}
              keyboardType={keyboardType}
              secureTextEntry={passwordForm && !icon ? true : false}
              textAlign={textAlign}
              editable={disabled ? false : true}
              value={value}
              onChangeText={onChangeText}
              placeholder={placeholder}
              style={[
                styles.input,
                leftIcon && styles.leftIconInput,
                mode === 'outlined'
                  ? [styles.outlined, {borderRadius: borderRadius}]
                  : mode === 'rounded'
                  ? styles.rounded
                  : styles.standards,
                focus === true && styles.focused,
                style,
              ]}
            />
            {rightIcon && (
              <TouchableOpacity onPress={() => setIcon(!icon)}>
                {rightIcon}
              </TouchableOpacity>
            )}
            {passwordForm && (
              <TouchableOpacity
                onPress={() => {
                  setIcon(!icon);
                }}>
                <Image
                  source={
                    !icon
                      ? require('../assets/eye.png')
                      : require('../assets/eye-off.png')
                  }
                  style={styles.icon}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: white,
    width: '100%',
  },
  outlined: {
    borderWidth: Platform.OS === 'ios' ? 1 : 0.5,
    backgroundColor: 'transparent',
  },
  rounded: {
    borderWidth: Platform.OS === 'ios' ? 1 : 0.5,
    backgroundColor: 'transparent',
    borderRadius: 22,
  },
  focused: {
    borderColor: blue500,
  },
  standards: {
    borderBottomWidth: Platform.OS === 'ios' ? 1 : 0.5,
    backgroundColor: 'transparent',
  },
  leftIconInput: {
    paddingLeft: 40,
  },
  input: {
    width: '100%',
    height: 44,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
  },
  icon: {
    height: 20,
    width: 20,
    marginTop: 33,
    right: 30,
  },
  leftIcon: {
    height: 20,
    width: 20,
    marginTop: 33,
    position: 'absolute',
    left: 10,
  },
  labelStyle: {
    position: 'absolute',
  },
  subContainer: {
    alignSelf: 'center',
    width: '90%',
  },
  main: {
    flex: 1,
  },
});
export default CustomInput;
