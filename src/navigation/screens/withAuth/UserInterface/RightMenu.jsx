import React from "react";
import { Button, StyleSheet, TouchableOpacity, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Chat from "./Chat";
import { useTheme } from "@react-navigation/native";
import Users from "../../../../assets/svg/users.svg"
import Menu from "../../../../assets/svg/menu.svg"

const DrawerRight = createDrawerNavigator()

const RightMenu = ({navigation}) => {

  const { colors } = useTheme()

  return (
    <DrawerRight.Navigator id={"RightDrawer"} screenOptions={{ drawerPosition: "right" }}>
      <DrawerRight.Screen name={"Chat"} component={Chat} options={{
        title: "Chat",
        headerStyle: {
          backgroundColor: colors.secondary,
        },
        header: (props) => (
          <View style={[styles.header, {backgroundColor: colors.secondary}]}>
            <TouchableOpacity style={[styles.leftButton]} onPress={() =>{
              navigation.openDrawer()
            }}>
              <Menu width={30} height={30} fill={colors.text} viewBox={"0 0 50 50"} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.rightButton]} onPress={() =>{
              props.navigation.openDrawer()
            }}>
              <Users width={30} height={30} fill={colors.text} viewBox={"0 0 50 50"} />
            </TouchableOpacity>
          </View>
        ),
        headerRight: () =>(
          <Button title={"USERS"} onPress={() =>{
            navigation.openDrawer()
          }} />
        )
      }} />
    </DrawerRight.Navigator>
  )
};

const styles = StyleSheet.create({
  leftMenu: {
    height: "100%",
    backgroundColor: "red"
  },
  rightButton: {
    position: "absolute",
    right: 5
  },
  leftButton: {
    position: "absolute",
    left: 5
  },
  header: {
    width: "100%",
    height: 50,
    justifyContent: "center"
  }
});

export default RightMenu;
