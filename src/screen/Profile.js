import React, { Component } from 'react';
import {View} from 'react-native';
import {Container, Thumbnail, Text} from 'native-base';

export default class Profile extends Component {
  render() {
    const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
    return (
      <>
        <Container>
          <View style={{flex:0.5, backgroundColor:'#633a82', alignItems:'center', justifyContent:'center'}}>
            <Thumbnail large source={{uri: uri}} style={{width: 150, height: 150, borderRadius: 150/3}}/>
            <Text style={{fontWeight:'bold', fontSize:20, color:'white', marginTop:10}}>Mamat Manja</Text>
          </View>
          <View style={{flex:1, backgroundColor:'white', alignItems:'center', justifyContent:'center'}}>       
            <View style={{flexDirection: 'row', width:'80%', height:'10%', justifyContent:'space-between'}}>
              <Text>Email :</Text>
              <Text>mamat@gmail.com</Text>
            </View>
            <View style={{flexDirection: 'row', width:'80%', height:'10%', justifyContent:'space-between'}}>
              <Text>Phone :</Text>
              <Text>08123456789</Text>
            </View>
            <View style={{flexDirection: 'row', width:'80%', height:'10%', justifyContent:'space-between'}}>
              <Text>Balance :</Text>
              <Text>Rp.10.000</Text>
            </View>
          </View>
        </Container>
      </>
    )
  }
}
