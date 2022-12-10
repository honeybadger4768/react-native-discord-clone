import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/withoutAuth/Login";
import MadeAuth from "./screens/withAuth/MadeAuth";
import {RootState} from "../redux/store";

const Stack = createNativeStackNavigator<>()

const NavigationController = () => {
  const state = useSelector((state: RootState) => state.slice);

  useEffect(() => {
    console.log(state);
  }, []);

  return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!state.isLogged ? (
          <Stack.Screen name={"Login"} component={Login} />
        ) : (
          <Stack.Screen name={"MadeAuth"} component={MadeAuth} />
        )}
      </Stack.Navigator>
  )
};

export default NavigationController;
