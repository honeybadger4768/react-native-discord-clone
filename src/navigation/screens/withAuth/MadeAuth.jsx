import React from "react"
import { Text } from "react-native";
import { useTheme } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { createDrawerNavigator } from "@react-navigation/drawer";
import LeftMenu from "./UserInterface/LeftMenu";
import Chat from "./UserInterface/RightMenu";
//const DrawerLeft = createDrawerNavigator()

const MadeAuth = () =>{
  const state = useSelector(state => state.slice)
  const {colors} = useTheme()

  return (
    <>
      {/*<Text style={{color: colors.text}}>MadeAuth{"\n"} Hello {state.email}</Text>*/}
      <LeftMenu />
    </>
  )
}

export default MadeAuth
