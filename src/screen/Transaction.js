import React, {Component} from 'react';
import {ScrollView, View, Text, TouchableOpacity, TextInput} from 'react-native';
import {Header, Container, Input} from 'native-base';
import Caret from 'react-native-vector-icons/AntDesign';

export default class Transaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      caretStatus: false,
      text: 'teks',
    };
    this.sort = () => {
      this.setState({caretStatus: !this.state.caretStatus});
    };
  }
  render() {
    console.log(this.state)
    return (
      <>
        <Container>
          <Header style={{backgroundColor: '#633a82', alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold', fontSize: 20, color: 'white'}}>
              Transaction history
            </Text>
          </Header>
          <ScrollView style={{flex: 1, marginBottom: 10}}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Login')}
              style={{
                marginTop: 10,
                backgroundColor: '#f0e3ff',
                height: 100,
                borderRadius: 20,
                display: 'flex',
                flexDirection: 'row',
              }}>
              <View
                style={{
                  margin: 15,
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1,
                }}>
                <Text style={{fontWeight: 'bold', fontSize: 15}}>
                  Bandung - Jakarta
                </Text>
                <Text style={{fontWeight: 'bold', fontSize: 15}}>
                  Departure time: 09.00
                </Text>
                <Text style={{fontWeight: 'bold', fontSize: 15}}>
                  Seat Quota: 5
                </Text>
              </View>
              <View
                style={{
                  margin: 15,
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1,
                }}>
                <Text style={{fontWeight: 'bold', fontSize: 15, color: 'blue'}}>
                  Rp.100.000
                </Text>
                <Text style={{fontWeight: 'bold', fontSize: 15}}>
                  Arrive time: 13.00
                </Text>
                <Text style={{fontWeight: 'bold', fontSize: 15}}>
                  03/05/2020
                </Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
          <View
            style={{
              backgroundColor: '#633a82',
              flex: 0.15,
            }}>
            <View style={{flexDirection: 'row', alignItems:'center', flex:1}}>
              <Input
                type="text"
                placeholder="Find your Destination"
                style={{
                  backgroundColor: 'white',
                  borderRadius: 20,
                  marginLeft:5,
                  marginTop: 10,
                  height: 40,
                  marginBottom: 10,
                  alignItems: 'center',
                  flex: 1,
                }}
              />
              <TouchableOpacity
                style={{marginLeft: 10, flex: 0.3}}
                onPress={this.sort}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>
                  Sort By Date
                </Text>
                <Caret
                  name={this.state.caretStatus ? 'caretdown' : 'caretup'}
                  size={20}
                  color="white"
                  style={{marginLeft: 30}}
                />
              </TouchableOpacity>
            </View>
          </View>
        </Container>
      </>
    );
  }
}
