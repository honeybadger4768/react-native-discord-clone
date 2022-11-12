import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import Chat from "./RightMenu";
import RightMenu from "./RightMenu";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "@react-navigation/native";
import Server from "../../../../components/Server";
import { FlashList } from "@shopify/flash-list";

const Drawer = createDrawerNavigator();


const LeftMenu = ({ navigation }) => {
  const { colors } = useTheme();
  const [currentServerId, setCurrentServerId] = useState(null);
  const [servers, setServers] = useState([
    {
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
  ]);


  const onPress = (id) =>{
    setCurrentServerId(id)
  }

  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <View style={{ width: "100%", flexDirection: "row", height: "100%", backgroundColor: colors.tertiary }}>
          <View style={{ flex: 1, backgroundColor: colors.tertiary}}>
            {/*SUNUCULAR*/}
            <FlashList
              renderItem={({item}) =>(
                <Server {...item} onPress={onPress} isClicked={item.id === currentServerId} />
              )}
              data={servers}
              estimatedItemSize={10}
            />
          </View>
          <View style={{
            flex: 4,
            backgroundColor: colors.secondary,
            marginRight: 5,
            borderTopRightRadius: 20,
          }}>
            {/*DMLER*/}
          </View>
        </View>
      )}
      id={"LeftDrawer"} screenOptions={{ headerShown: false, drawerPosition: "left" }}>
      <Drawer.Screen name={"RightMenu"} component={RightMenu} />
    </Drawer.Navigator>
  );
};

export default LeftMenu;
