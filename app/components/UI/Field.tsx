import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {tailwind} from '../layout/Layout';

interface IField {
  onChange: (val: string) => void;
  val: string;
  placeholder: string;
  isSecure?: boolean;
}

const Field: React.FC<IField> = ({onChange, placeholder, isSecure, val}) => {
  return (
    <TextInput
      showSoftInputOnFocus={false}
      placeholder={placeholder}
      onChangeText={onChange}
      value={val}
      secureTextEntry={isSecure}
      autoCapitalize="none"
      style={tailwind('rounded-xl bg-gray-100 mt-3 p-3 w-full')}
    />
  );
};

export default Field;
