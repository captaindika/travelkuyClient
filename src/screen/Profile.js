import React, {Component} from 'react';
import {View, ScrollView, TextInput} from 'react-native';
import {Container, Thumbnail, Text} from 'native-base';
import Logo from 'react-native-vector-icons/MaterialIcons';


export default class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    const uri =
      'https://facebook.github.io/react-native/docs/assets/favicon.png';
    return (
      <>
        <ScrollView>
          <Container>
          <View
            style={{
              flex: 0.6,
              backgroundColor: '#633a82',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Thumbnail
              large
              source={{uri: uri}}
              style={{width: 150, height: 150, borderRadius: 150 / 3}}
            />
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: 'white',
                marginTop: 10,
              }}>
              Mamat Manja
            </Text>
          </View>
          <View
            style={{
              flex: 0.5,
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                width: '80%',
                height: '20%',
                justifyContent: 'space-between',
                backgroundColor: 'grey',
                borderRadius: 20,
                alignItems: 'center',
                marginBottom:10,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.34,
                shadowRadius: 6.27,

                elevation: 10,
              }}>
              <Text style={{marginLeft:10, color:'white', fontSize:15, fontWeight:'bold'}}>Email :</Text>
              <Text style={{marginRight:10, color:'white', fontSize:15, fontWeight:'bold'}}>mamat@gmail.com</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: '80%',
                height: '20%',
                justifyContent: 'space-between',
                backgroundColor: 'grey',
                borderRadius: 20,
                marginBottom:10,
                alignItems: 'center',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.34,
                shadowRadius: 6.27,

                elevation: 10,
              }}>
              <Text style={{marginLeft: 10, color:'white', fontSize:15, fontWeight:'bold'}}>Phone :</Text>
              <Text style={{marginRight: 10, color:'white', fontSize:15, fontWeight:'bold'}}>08123456789</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: '80%',
                height: '20%',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: 'grey',
                borderRadius: 20,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.34,
                shadowRadius: 6.27,

                elevation: 10,
                
              }}>
              <Text style={{marginLeft:10, color:'white', fontSize:15, fontWeight:'bold'}}>Balance :</Text>
              <TextInput defaultValue={'Rp.100.000'} style={{marginRight:10, color:'white', fontSize:15, fontWeight:'bold', backgroundColor:'transparent'}}/>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#633a82',
              justifyContent: 'center',
              alignItems: 'center',
              flex: 0.5,
            }}>
            <Logo name="card-travel" size={80} color="white" />
            <Text style={{color: 'white', fontSize: 20}}>
              Trust your journey to us
            </Text>
          </View>
          </Container>
        </ScrollView>
      </>
    );
  }
}
