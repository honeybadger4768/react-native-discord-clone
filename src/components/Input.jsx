import React from "react";
import {TextInput} from "react-native";

export const Input = ({ style, onChangeText, onBlur, value, ...props}) =>{
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
