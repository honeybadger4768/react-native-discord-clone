import React from "react";
import {  useSelector } from "react-redux";
import {DarkTheme, NavigationContainer} from "@react-navigation/native";
import NavigationController from "./src/navigation/NavigationController";
import { darkTheme } from "./src/utils/themes";
import {RootState} from "./src/redux/store";

const App = () => {

  const state = useSelector((state: RootState) => state.slice);

  return (
    <NavigationContainer theme={darkTheme}>
      <NavigationController />
    </NavigationContainer>
  );
};

export default App;
