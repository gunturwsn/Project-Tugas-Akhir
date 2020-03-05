import React from "react";
import {  createAppContainer, createSwitchNavigator } from "react-navigation";
import IntroScreen from "./IntroScreen";
import LoginScreen from "../LoginScreen";
import { createDrawerNavigator } from 'react-navigation-drawer'; 
import DashboardScreen from "../DashboardScreen";

const IntroScreenRouter = createDrawerNavigator({
  Intro: {
    screen: IntroScreen,
    navigationOptions: {
      drawerLockMode: "locked-closed",
      drawerLabel: null
    }
  },
  Login: {
    screen: DashboardScreen,
    navigationOptions: {
      drawerLockMode: "locked-closed",
      drawerLabel: null
    }
  }
});

export default createAppContainer(IntroScreenRouter);
