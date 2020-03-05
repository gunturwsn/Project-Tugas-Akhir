import React from "react";
import {  createAppContainer, createSwitchNavigator } from "react-navigation";
import LabelPenyakitScreen from "./labelPenyakitScreen";
import Sidebar from "../Sidebar";
import { createDrawerNavigator } from 'react-navigation-drawer'; 

const LabelPenyakitScreenRouter = createDrawerNavigator(
  {
    LabelPenyakit: {
      screen: LabelPenyakitScreen
    }
  },
  {
    contentComponent: props => <Sidebar {...props} />
  }
);
export default createAppContainer(LabelPenyakitScreenRouter);
