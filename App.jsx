import React from "react";
import {  useSelector } from "react-redux";
import {NavigationContainer } from "@react-navigation/native";
import NavigationController from "./src/navigation/NavigationController";
import { darkTheme } from "./src/utils/themes";

const App = () => {

  const state = useSelector(state => state.slice);

  return (
    <NavigationContainer theme={state.dark ? darkTheme : null}>
      <NavigationController />
    </NavigationContainer>
  );
};

export default App;
