import React from "react";
import { Image, Pressable, StyleSheet, Text } from "react-native";
import { useTheme } from "@react-navigation/native";

const Server = ({name, isClicked, image, onPress, id}) =>{

  const {colors} = useTheme()

  return (
    <Pressable onPress={() =>{
      onPress(id)
    }} style={[styles.pressableStyle, {backgroundColor: isClicked ? colors.blueButton: colors.primary}]}>
      {image ? (
        <Image source={{uri: image}} style={[styles.serverImage]} />
      ) : (
        <Text style={[styles.name, {color: colors.text}]} >{name}</Text>
      )}
    </Pressable>
  )
}


const styles = StyleSheet.create({
  pressableStyle: {
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginVertical: 3,
    alignSelf: "center"
  },
  name: {
    fontSize: 16
  },
  serverImage: {
    width: 30,
    height: 30,
  }
})

export default Server