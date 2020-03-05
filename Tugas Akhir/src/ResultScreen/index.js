import React from "react";
import {  createAppContainer, createSwitchNavigator } from "react-navigation";
import ResultScreen from "./ResultScreen";
import Sidebar from "../Sidebar";
import { createDrawerNavigator } from 'react-navigation-drawer'; 

const ResultScreenRouter = createSwitchNavigator(
  {
    Result: {
      screen: ResultScreen
    }
  },
  {
    contentComponent: props => <Sidebar {...props} />
  }
);
export default createAppContainer(ResultScreenRouter);
