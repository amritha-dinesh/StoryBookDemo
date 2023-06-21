import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';

interface CustomCardProps {
  title?: string;
  content?: string | React.ReactElement;
  mode?: 'elevated' | 'outlined' | 'contained';
  onPress?: (e: GestureResponderEvent) => void;
  onLongPress?: () => void;
  delayLongPress?: number;
  testID?: string;
  disabled?: boolean;
  cardStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  contentStyle?: StyleProp<ViewStyle>;
}

export const CustomCard: React.FC<CustomCardProps> = ({
  title = 'Title',
  content,
  mode = 'elevated',
  onPress,
  onLongPress,
  testID = 'Card',
  disabled = false,
  cardStyle,
  titleStyle,
  contentStyle,
  delayLongPress,
  ...rest
}) => (
  <SafeAreaView>
    <TouchableOpacity
      testID={'Custom-card'}
      disabled={disabled}
      onPress={onPress}
      onLongPress={onLongPress}
      delayLongPress={delayLongPress}>
      <View
        testID={testID}
        style={[
          styles.card,
          mode === 'elevated'
            ? styles.elevated
            : mode === 'outlined'
            ? styles.outlined
            : styles.contained,
          cardStyle,
        ]}
        {...rest}>
        <Text style={[styles.title, titleStyle]}>{title}</Text>
        <View style={contentStyle}>
          <Text>{content}</Text>
        </View>
      </View>
    </TouchableOpacity>
  </SafeAreaView>
);
export default CustomCard;
const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    margin: 8,
  },
  elevated: {
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    shadowColor: '#000',
  },
  outlined: {
    borderWidth: 0.5,
  },
  contained: {
    backgroundColor: '#E5E4E2',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
