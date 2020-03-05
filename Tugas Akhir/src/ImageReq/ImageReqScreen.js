import React, { Component } from "react";
import { StyleSheet, Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, List, ListItem, Button, Icon, Left, Body, Right } from 'native-base';
import HeaderCustom from "./HeaderCustom";

export default class LabelPenyakit extends Component {
   
      render(){
          return(
              <Container>
                <HeaderCustom
                onPress={() => {
                  this.props.navigation.navigate("Dashboard");
                }}
              />
              <Content>
              <Body style={styles.CardItem}>
                  <Text style={styles.titleText}>Specification of Leaf Image</Text>
              </Body>
        
              <Card>
                <CardItem>
                  <Text>To get maximum accuracy, it is recommended to upload leaf images according to the specifications below :</Text>
                </CardItem>
                <CardItem>
                  <Text>Taken with a minimum resolution of 8 MP camera</Text>
                </CardItem>
                <CardItem>
                  <Text>Minimum image size of 256 x 256 pixels</Text>
                </CardItem>
                <CardItem>
                  <Text>RGB (Red Green Blue) color format</Text>
                </CardItem>
                <CardItem>
                  <Text>Has an .jpg image extension</Text>
                </CardItem>
                <CardItem>
                  <Text>Good lighting</Text>
                </CardItem>
                <CardItem>
                  <Text>Has a focus on the image of an apple leaf</Text>
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
        alignItems: "center",
        marginBottom: 20,
        marginTop: 15
      },
      titleText: {
        fontWeight: "bold",
        fontSize: 20
      }
    });
  