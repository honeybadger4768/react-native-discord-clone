import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { useTheme } from "@react-navigation/native";

export const Button = ({children, type = "default", style, onPress}) =>{
  const {colors} = useTheme()

  const getButtonColor = (type) =>{
    switch (type){
      case "default":
        return colors.blueButton
      case "danger":
        return colors.redButton
    }
  }

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.9} style={{
      ...style,
      backgroundColor: getButtonColor(type),
      width: "80%",
      height: 60,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10
    }}>
      <Text style={{
        color: colors.text,
        fontSize: 20
      }}>{children}</Text>
    </TouchableOpacity>
  )
}
