import React from "react";
import {  createAppContainer, createSwitchNavigator } from "react-navigation";
import ImageReqScreen from "./ImageReqScreen";
import Sidebar from "../Sidebar";
import { createDrawerNavigator } from 'react-navigation-drawer'; 

const ImageReqScreenRouter = createDrawerNavigator(
  {
    ImageReq: {
      screen: ImageReqScreen
    }
  },
  {
    contentComponent: props => <Sidebar {...props} />
  }
);
export default createAppContainer(ImageReqScreenRouter);
