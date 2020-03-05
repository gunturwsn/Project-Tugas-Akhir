import React, { Component } from "react";
import {StyleSheet,Dimensions,ScrollView,View,ImageBackground} from "react-native";

import { Container, Content, Text, Thumbnail } from "native-base";
import { predictionCreate } from "../../store/actions";
import { connect } from "react-redux";
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import Logo from "../../svg/Logo";

import HeaderCustom from "./HeaderCustom";
import CardCustom from "./CardCustom";

const bg = require("../../assets/images/dashboardbg.jpg");
const noPhoto = require("../../assets/images/nopoto.png");

class DashboardScreen extends Component {
  state = {
    screenWidth: Dimensions.get("window").width,
    screenHeight: Dimensions.get("window").height
  };
  
  componentDidMount() {
    this.props.navigation.closeDrawer();
    this.getPermissionAsync();
    console.log('hi');
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: false
    });

    console.log(result);

    if (!result.cancelled) {
      console.log(result);
      this.props.predictionCreate(result);
      this.props.navigation.navigate("Result");
    }
  };

  toLabelPenyakit = () => {
    Alert.alert('aa');
    // this.props.navigation.navigate("LabelPenyakit");
  }

  render() {
    return (
      <Container>
        <ImageBackground style={styles.backgroundImage} source={bg}>
          <HeaderCustom />

          <Content>
            <View style={styles.profile}>
              <Thumbnail large source={noPhoto}/>
              <Text style={styles.namaText}>Apple Leaf Detection</Text> 
             
              
            </View>
            <View style={styles.contentBody}>
              <View style={styles.cards}>
              
              <CardCustom 
                  svg={Logo.cameraSVG}
                  text="Specification"
                  subText="Spesification of Image Leaf"
                  onPress={()=>{
                    this.props.navigation.navigate("ImageReq");
                  }}
                />
                <CardCustom
                  svg={Logo.filePictureSVG}
                  text="File"
                  subText="Choose From File"
                  onPress={this._pickImage}
                />
               
              </View>
              <View style={styles.cards}>
                <CardCustom
                  svg={Logo.historySVG}
                  text="About Us"
                  subText="Information"
                  onPress={()=>{
                    this.props.navigation.navigate("AboutUs");
                  }}
                />
                <CardCustom
                  onPress={()=>{
                    this.props.navigation.navigate("LabelPenyakit");
                  }}
                  svg={Logo.diseaseSVG}
                  text="Disease Label"
                  subText="List of Apple Leaf Diseases"
                />
              </View>
            </View>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}

export default connect(
  null,
  { predictionCreate }
)(DashboardScreen);

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null
  },
  profile: {
    flex: 1,
    alignItems: "center",
    height:
      Dimensions.get("window").height -
      (70 / 100) * Dimensions.get("window").height
  },
  contentBody: {
    backgroundColor: "#F5F5F5",
    height:
      Dimensions.get("window").height -
      (30 / 100) * Dimensions.get("window").height
  },
  cards: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    width: Dimensions.get("window").width,
    marginTop: 10,
    textAlign: 'center'
  },
  namaText: {
    fontSize: 20,
    color: "yellow",
    marginTop: 15,
    marginBottom: 3,
    fontWeight: "bold"
  },
  subText: {
    textAlign: 'center'
  }
});
