import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import RightMenu from "./RightMenu ";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useTheme } from "@react-navigation/native";
import Server from "../../../../components/Server";
import { FlashList } from "@shopify/flash-list";
import { useDispatch, useSelector } from "react-redux";
import { changeScreen, setDms, setServers } from "../../../../redux/slice";
import { Input } from "../../../../components/Input";
import AddChat from "../../../../assets/svg/addChat.svg"


const Drawer = createDrawerNavigator();

let servers = [
  {
    name: "DM",
    id: 0,
  }, {
    name: "a",
    id: 1,
  }, {
    name: "b",
    id: 2,
  }, {
    name: "c",
    id: 3,
  }, {
    name: "d",
    id: 4,
  }, {
    name: "e",
    id: 5,
  }, {
    name: "f",
    id: 6,
  },
];

const LeftMenu = ({ }) => {
  const { colors } = useTheme();

  const state = useSelector(state => state.slice);
  const dispatch = useDispatch();
  const navigation = useNavigation()

  const onPress = (id) => {
    dispatch(changeScreen({ server: id, channel: 0 }));

  };
  useEffect(() => {
    //getServers
    (async () => {
      const req = await fetch("https://api.github.com/users", {
        method: "GET",
      });
      const data = await req.json();
      const requires = data.filter((a, i) => i < 10);
      dispatch(setDms({ dms: requires }));
      dispatch(setServers({ servers: servers }));
    })();
    return () => {
    };
  }, []);

  useEffect(() => {
    console.log("ekran değişti");
  }, [state.currentScreen]);


  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <View style={{ width: "100%", flexDirection: "row", height: "100%", backgroundColor: colors.tertiary }}>
          <View style={{ flex: 1, backgroundColor: colors.tertiary }}>
            {/*SERVERS*/}
            <FlashList
              renderItem={({ item }) => (
                <Server {...item} onPress={onPress} isClicked={item.id === state.currentScreen[0]} />
              )}
              extraData={state.currentScreen}
              data={state.servers}
              estimatedItemSize={10}
            />
          </View>
          <View style={{
            flex: 4,
            backgroundColor: colors.secondary,
            marginRight: 5,
            borderTopRightRadius: 20,
          }}>
            {/*DMS || CHANNELS*/}
            {state.currentScreen[0] === 0 ? (
              <View style={{ flex: 1 }}>
                <View
                  style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center", marginTop: 10 }}>
                  <Text style={[styles.bigText, { color: colors.text }]}>Direct Messages</Text>
                  <AddChat width={25} height={25} fill={colors.text} viewBox={"0 0 50 50"} />
                </View>
                <Input style={[styles.findConversationInput, { backgroundColor: colors.tertiary }]} />
                <FlashList
                  renderItem={({ item, index }) => (
                    <TouchableHighlight underlayColor={colors.primary} onPress={() =>{
                      dispatch(changeScreen({server: 0, channel: index}))
                      navigation.dispatch(DrawerActions.closeDrawer())
                    }}>
                      <View style={[styles.aDmBox, {
                        backgroundColor: index === state.currentScreen[1] ? colors.primary : null
                      }]}>
                        <Image source={{uri: item?.avatar_url}} style={[styles.avatar]} />
                        <Text style={[styles.username, {color: state.currentScreen[1] === index ? colors.text : colors.secondaryText}]}>{item?.login}</Text>
                      </View>
                    </TouchableHighlight>
                  )}
                  extraData={state.currentScreen}
                  data={state.dms}
                  estimatedItemSize={10}
                />
              </View>
            ) : null}
          </View>
        </View>
      )}
      id={"LeftDrawer"} screenOptions={{ headerShown: false, drawerPosition: "left" }}>
      <Drawer.Screen name={"RightMenu"} component={RightMenu} />
    </Drawer.Navigator>
  );
};


const styles = StyleSheet.create({
  findConversationInput: {
    width: "80%",
    height: 30,
    marginVertical: 10,
    alignSelf: "center",
    borderRadius: 5,
    justifyContent: "center",
  },
  bigText: {
    fontSize: 16,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  aDmBox: {
    width: "100%",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 5,
    alignSelf: "center",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 1,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginHorizontal: 10,
  },
});

export default LeftMenu;
