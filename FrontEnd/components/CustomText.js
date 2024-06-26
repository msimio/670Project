import React from 'react';
import { Text } from 'react-native';
import { useTheme } from 'react-native-paper';

const CustomText = ({ children, style, ...props }) => {
  const theme = useTheme();

  return (
    <Text style={[{ color: theme.colors.text }, style, {fontFamily: 'Nunito_900Black'}]} {...props}>
      {children}
    </Text>
  );
};

export default CustomText;