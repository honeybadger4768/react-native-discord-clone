import {DefaultTheme, Theme} from "@react-navigation/native";

export const darkTheme = {
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: "#36393f",
    secondary: "#2f3136",
    tertiary: "#202225",
    background: "#36393f",
    text: "#fff",
    secondaryText: "#7e7f84",
    border: "#3e4248",
    blueButton: "#5865f2",
    redButton: "#d83c3e"
  },
};

export type myDarkTheme = {
  dark: boolean,
  colors: {
    primary: string
    secondary: string,
    tertiary: string,
    background: string,
    text: string,
    secondaryText: string,
    border: string,
    blueButton: string,
    redButton: string
  }
} & Theme
