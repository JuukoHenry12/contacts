import React from 'react';
import {View, Text, TouchableOpacity,ActivityIndicator} from 'react-native';
import styles from './styles';
import colors from '../../../assets/theme/colors';
import color from "react-native-reanimated"

const CustomButton = ({
  title,
  secondary,
  primary,
  danger,
  disabled,
  loading,
  onPress,
  style,
}) => {
  const getBgColor = () => {
    if (disabled) {
      return colors.grey;
    }

    if (primary) {
      return colors.primary;
    }

    if (secondary) {
      return colors.secondary;
    }

    if (danger) {
      return colors.danger;
    }
  };
  return (
    <TouchableOpacity
       disabled={disabled}
       onPress={onPress}
       style={[styles.wrapper, {backgroundColor: getBgColor()},style]}>
      <View style={[styles.loaderSection]}>
        {loading &&(
          <ActivityIndicator   color={primary ? colors.secondary : colors.primary}/>
        )}
        {title && (
          <Text 
          style={{color: disabled ? 'black' : colors.white,
          paddingLeft: loading ? 5 : 0,
          }}>
            {loading ? 'please waiting ..' : title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
