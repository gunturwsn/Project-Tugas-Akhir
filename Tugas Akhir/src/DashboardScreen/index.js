import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import DashboardScreen from "./DashboardScreen";
import ResultScreen from "../ResultScreen";
import Sidebar from "../Sidebar";
import LabelPenyakitScreen from "../LabelPenyakitScreen";
import AboutUsScreen from "../AboutUs";
import ImageReqScreen from "../ImageReq";
import { createDrawerNavigator } from 'react-navigation-drawer'; 
// import { createStackNavigator } from 'react-navigation-stack';

const DashboardScreenRouter = createSwitchNavigator(
  {
    Dashboard: { screen: DashboardScreen },
    LabelPenyakit: {
      screen: LabelPenyakitScreen
    },
    Result: {
      screen: ResultScreen,
      navigationOptions: {
        drawerLockMode: "locked-open",
        drawerLabel: null
      }
    },
    AboutUs:{
      screen:AboutUsScreen
    },
    ImageReq: {
      screen: ImageReqScreen
    }
  
  },
  {
    contentComponent: props => <Sidebar {...props} />
  }
);
export default createAppContainer(DashboardScreenRouter);
