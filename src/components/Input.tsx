import React from "react";
import {TextInput} from "react-native";
import {TextInputProps} from "react-native";

export const Input : React.FC<TextInputProps> = ({ style, onChangeText, onBlur, value, ...props}) =>{
  return (
    <TextInput
      {...props}
      onChangeText={onChangeText}
      onBlur={onBlur}
      style={style}
      value={value}
    />
  )
}
