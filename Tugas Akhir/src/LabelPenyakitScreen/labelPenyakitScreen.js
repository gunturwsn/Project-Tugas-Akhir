import React, { Component } from "react";
import { StyleSheet, Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, List, ListItem, Button, Icon, Left, Body, Right, Title } from 'native-base';

import CardCustom from "../DashboardScreen/CardCustom";
import AppleScab from "../../assets/images/appleScab.jpg";
import BlackRot from "../../assets/images/blackRot.jpg";
import CedarAppleRust from "../../assets/images/cedarAppleRust.jpg";
import healthy from "../../assets/images/healthy.jpg";
import HeaderCustom from "./HeaderCustom";

export default class LabelPenyakit extends Component {
  componentDidMount(){
    this.props.navigation.closeDrawer();
  }
    render(){
        return(
            <Container>
              <HeaderCustom 
              onPress={() => {
                this.props.navigation.navigate("Dashboard");
              }}
            />
              <Content>
              <Card style={{flex: 0}}>
                <CardItem style={styles.CardItem}>
                  
                    <Body style={styles.CardItem}>
                      <Text style={styles.titleText}>Alternaria Leaf Blotch</Text>
                      <Text style={styles.subText}>Fungus of Alternaria Mali</Text>
                    </Body>
                  
                </CardItem>
                <CardItem style={styles.CardItem}>
                  <Body style={styles.CardItem}>
                    <Image source={AppleScab} style={{height: 200, width: 200, flex: 1}}/>
                  </Body>
                </CardItem>
              </Card>
              <Card style={{flex: 0}}>
                <CardItem style={styles.CardItem}>
                  
                    <Body style={styles.CardItem}>
                      <Text style={styles.titleText}>Apple Scab</Text>
                      <Text style={styles.subText}>Fungus of Venturia inaequalis</Text>
                    </Body>
                  
                </CardItem>
                <CardItem style={styles.CardItem}>
                  <Body style={styles.CardItem}>
                    <Image source={AppleScab} style={{height: 200, width: 200, flex: 1}}/>
                  </Body>
                </CardItem>
              </Card>
              <Card style={{flex: 0}}>
                <CardItem style={styles.CardItem}>
                  
                    <Body style={styles.CardItem}>
                      <Text style={styles.titleText}>Black Pox</Text>
                      <Text style={styles.subText}>Fungus of Helminthosporium papulosum</Text>
                    </Body>
                  
                </CardItem>
                <CardItem style={styles.CardItem}>
                  <Body style={styles.CardItem}>
                    <Image source={AppleScab} style={{height: 200, width: 200, flex: 1}}/>
                  </Body>
                </CardItem>
              </Card>
              <Card style={{flex: 0}}>
                <CardItem style={styles.CardItem}>
                  
                    <Body style={styles.CardItem}>
                      <Text style={styles.titleText}>Black Rot</Text>
                      <Text style={styles.subText}>Fungus of Botryosphaeria obtusa</Text>
                    </Body>
                  
                </CardItem>
                <CardItem style={styles.CardItem}>
                  <Body style={styles.CardItem}>
                    <Image source={BlackRot} style={{height: 200, width: 200, flex: 1}}/>
                  </Body>
                </CardItem>
              </Card>
              <Card style={{flex: 0}}>
                <CardItem style={styles.CardItem}>
                  
                    <Body style={styles.CardItem}>
                      <Text style={styles.titleText}>Blister Spot</Text>
                      <Text style={styles.subText}>Bacterial of Pseudomonas syringae pv. papulans</Text>
                    </Body>
                  
                </CardItem>
                <CardItem style={styles.CardItem}>
                  <Body style={styles.CardItem}>
                    <Image source={BlackRot} style={{height: 200, width: 200, flex: 1}}/>
                  </Body>
                </CardItem>
              </Card>
              <Card style={{flex: 0}}>
                <CardItem style={styles.CardItem}>
                  
                    <Body style={styles.CardItem}>
                      <Text style={styles.titleText}>Cedar Apple Rust</Text>
                      <Text style={styles.subText}>Fungus of Gymnosporangium juniperi-virginianae</Text>
                    </Body>
                  
                </CardItem>
                <CardItem style={styles.CardItem}>
                  <Body style={styles.CardItem}>
                    <Image source={CedarAppleRust} style={{height: 200, width: 200, flex: 1}}/>
                  </Body>
                </CardItem>
              </Card>
              <Card style={{flex: 0}}>
                <CardItem style={styles.CardItem}>
                  
                    <Body style={styles.CardItem}>
                      <Text style={styles.titleText}>Fire Blight</Text>
                      <Text style={styles.subText}>Bacterial of Erwinia Amylovora</Text>
                    </Body>
                  
                </CardItem>
                <CardItem style={styles.CardItem}>
                  <Body style={styles.CardItem}>
                    <Image source={CedarAppleRust} style={{height: 200, width: 200, flex: 1}}/>
                  </Body>
                </CardItem>
              </Card>
              <Card style={{flex: 0}}>
                <CardItem style={styles.CardItem}>
                  
                    <Body style={styles.CardItem}>
                      <Text style={styles.titleText}>Frogeye Leaf Spot</Text>
                      <Text style={styles.subText}> fungus of Cercospora Sojina</Text>
                    </Body>
                  
                </CardItem>
                <CardItem style={styles.CardItem}>
                  <Body style={styles.CardItem}>
                    <Image source={CedarAppleRust} style={{height: 200, width: 200, flex: 1}}/>
                  </Body>
                </CardItem>
              </Card>
              <Card style={{flex: 0}}>
                <CardItem style={styles.CardItem}>
                  
                    <Body style={styles.CardItem}>
                      <Text style={styles.titleText}>Healthy</Text>
                      
                    </Body>
                  
                </CardItem>
                <CardItem style={styles.CardItem}>
                  <Body style={styles.CardItem}>
                    <Image source={healthy} style={{height: 200, width: 200, flex: 1}}/>
                  </Body>
                </CardItem>
              </Card>
              <Card style={{flex: 0}}>
                <CardItem style={styles.CardItem}>
                  
                    <Body style={styles.CardItem}>
                      <Text style={styles.titleText}>Necrotic Leaf Blotch</Text>
                      <Text style={styles.subText}> fungus of Alternaria alternata</Text>
                    </Body>
                  
                </CardItem>
                <CardItem style={styles.CardItem}>
                  <Body style={styles.CardItem}>
                    <Image source={CedarAppleRust} style={{height: 200, width: 200, flex: 1}}/>
                  </Body>
                </CardItem>
              </Card>
              <Card style={{flex: 0}}>
                <CardItem style={styles.CardItem}>
                  
                    <Body style={styles.CardItem}>
                      <Text style={styles.titleText}>Powdery Mildew</Text>
                      <Text style={styles.subText}> fungus of Podosphaera Leucotricha</Text>
                    </Body>
                  
                </CardItem>
                <CardItem style={styles.CardItem}>
                  <Body style={styles.CardItem}>
                    <Image source={CedarAppleRust} style={{height: 200, width: 200, flex: 1}}/>
                  </Body>
                </CardItem>
              </Card>
            </Content>
            </Container>
        )
    }

  }

  const styles = StyleSheet.create({
    Container:{
      justifyContent: 'center'
    },
    CardItem: {
      justifyContent: 'center',
      alignItems: "center"
    },
    
    titleText: {
      fontWeight: 'bold'
    },
    subText: {
      textAlign: "center"
    }
  });
