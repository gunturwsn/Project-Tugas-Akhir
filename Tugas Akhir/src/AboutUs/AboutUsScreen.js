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
                <Card>
                <CardItem header>
                  <Body style={styles.CardItem}>
                  <Text style={styles.subText}>About Me</Text>
                  </Body>
                  </CardItem>
                  <CardItem>
                  <Body style={styles.CardItem}>
                    <Text style={styles.titleText}>
                      Guntur Wicakono
                    </Text>
                    <Text style={styles.titleText}>
                      Universitas Nasional
                    </Text>
                
                    <Text style={styles.titleText}>
                    Jl. Sawo Manila, RT.14/RW.3, Ps. Minggu, Kec. Ps. Minggu, Kota Jakarta Selatan, DKI Jakarta 12520
                    </Text>
                    <Text style={styles.titleText}>
                      gunturw79@gmail.com
                    </Text>
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
        textAlign: "center",
        marginBottom: 10
      
      },
      subText: {
        fontWeight: "bold",
        fontSize: 20
      }
    });
  