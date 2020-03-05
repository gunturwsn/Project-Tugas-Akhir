import React from "react";
import {  createAppContainer, createSwitchNavigator } from "react-navigation";
import AboutUsScreen from "./AboutUsScreen";
import Sidebar from "../Sidebar";
import { createDrawerNavigator } from 'react-navigation-drawer'; 

const AboutUsScreenRouter = createDrawerNavigator(
  {
    AboutUs: {
      screen: AboutUsScreen
    }
  },
  {
    contentComponent: props => <Sidebar {...props} />
  }
);
export default createAppContainer(AboutUsScreenRouter);
