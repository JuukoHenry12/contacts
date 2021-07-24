import React from 'react';
import {View, Text, TextInput} from 'react-native';
import colors from '../../../assets/theme/colors';
import styles from './styles';
const Input = ({
  onChangeText,
  iconPosition,
  value,
  label,
  style,
  icon,
  error,
  ...props
}) => {
  const [focused, setFocused] = React.useState(false);

  const getFlexDirecton = () => {
    if (icon && iconPosition) {
      if (iconPosition === 'left') {
        return 'row';
      } else if (iconPosition === 'right') {
        return 'row-reverse';
      }
    }
  };

  const getborderColor = () => {
    if (error) {
      return colors.danger;
    }

    if (focused) {
      return colors.primary;
    } else {
      return colors.grey;
    }
  };

  return (
    <View style={styles.inputContainer}>
      {label && <Text style={styles.text}>{label}</Text>}
      <View
        style={[
          styles.wraper,
          {alignItems: icon ? 'center' : 'baseline'},
          {broderColor: getborderColor(), flexDirection: getFlexDirecton()},
        ]}>
        <View>{icon && icon}</View>
        <TextInput
          onChangeText={onChangeText}
          value={value}
          style={[styles.textinput, style]}
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={() => setFocused(false)}
          {...props}
        />
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default Input;
