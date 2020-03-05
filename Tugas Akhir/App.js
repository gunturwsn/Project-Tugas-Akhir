import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppLoading } from "expo";
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';
import * as Icon from '@expo/vector-icons';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import reducers from "./store/reducer";
import IntroScreen from "./src/IntroScreen";

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

export default class App extends React.Component {
  state = {
    isReady: false,
    loading: true
  };

  async componentDidMount() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
     
    })
    this.setState({ loading: false })
  }  


  render() {

    const { isReady } = this.state;
if (this.state.loading) {
         return (
           <View></View>
         );
       }

    if (!isReady) {
      return (
        <AppLoading
          startAsync={this._loadResourceAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <Provider store={store}>
          <IntroScreen />
        </Provider>
      );
    }
  }

  _loadResourceAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require("./assets/images/bgIntro.jpg"),
        require("./assets/images/intro1.png"),
        require("./assets/images/dashboardbg.jpg"),
        require("./assets/images/nopoto.png")
      ]),
      Font.loadAsync({
      //   // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        ...Icon.FontAwesome.font,
   
        // Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("./assets/fonts/Roboto-Medium.ttf")
      })
    ]);
  };

  _handleLoadingError = err => {
    console.log(err);
  };

  _handleFinishLoading = () => {
    this.setState({ isReady: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

/*
#54BE14
#3D8C0D
#808080
*/
