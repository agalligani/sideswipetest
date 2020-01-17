import React from "react";
import Screen from "../app/screens/Screen";
import { StackNavigator } from "react-navigation";

export default RouteStack = StackNavigator(
  {
    Screen: {
      screen: Screen
    },
    Details: {
      screen: Screen
    }
  },
  {
    initialRouteName: "Home",
    headerMode: "none",
    transitionConfig: () => ({
      transitionSpec: {
        duration: 0,
        timing: Animated.timing,
        easing: Easing.step0
      }
    })
  }
);
