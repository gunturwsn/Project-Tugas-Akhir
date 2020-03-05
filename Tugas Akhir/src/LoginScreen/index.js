import React from "react";
import {  createAppContainer,createSwitchNavigator } from "react-navigation";
import LoginScreen from "./LoginScreen";
import DashboardScreen from "../DashboardScreen";
// import { createStackNavigator  } from 'react-navigation-drawer'; 
import { createDrawerNavigator } from 'react-navigation-drawer'; 

const LoginScreenRouter = createDrawerNavigator ({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      drawerLockMode: "locked-open",
      drawerLabel: null
    }
  },
  Dashboard: {
    screen: DashboardScreen,
    navigationOptions: {
      drawerLockMode: "locked-open",
      drawerLabel: null
    }
  }
});
export default createAppContainer(LoginScreenRouter);
