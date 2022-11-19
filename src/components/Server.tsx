import React from "react";
import {Pressable, StyleSheet, Text, Image, GestureResponderEvent, ImageProps, ImageSourcePropType} from "react-native";
import {Theme, useTheme} from "@react-navigation/native";
import {myDarkTheme} from "../utils/themes";

interface ServerProps {
  name?: string,
  isClicked: boolean,
  image?: string,
  onPress?: (id:number) => number | undefined,
  id: number
}


const Server : React.FC<ServerProps> = ({name, isClicked, image, onPress, id}) =>{

  const {colors} = useTheme() as myDarkTheme
  //<Image source={image.uri ? {uri: image.uri} : image} style={[styles.serverImage]} />
  return (
    <Pressable onPress={() =>{
      if(onPress) onPress(id)
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
