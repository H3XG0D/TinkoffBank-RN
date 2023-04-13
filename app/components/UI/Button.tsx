import {Text, TouchableHighlight} from 'react-native';
import React from 'react';
import {tailwind} from '../layout/Layout';

interface IButton {
  title: string;
  colors?: [string, string];
  onPress?: () => void;
}

const Button: React.FC<IButton> = ({
  onPress,
  title,
  colors = ['bg-yellow-300', '#FBBF24'],
}) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={colors[1]}
      style={tailwind(
        `${colors[0]} text-gray-800 rounded-xl w-full my-4 py-4`,
      )}>
      <Text style={tailwind('text-center')}>{title}</Text>
    </TouchableHighlight>
  );
};

export default Button;
