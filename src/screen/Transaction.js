import React, {Component} from 'react';
import {ScrollView, View, TouchableOpacity} from 'react-native';
import {Header, Container, Text} from 'native-base';

export default class Transaction extends Component {
  render() {
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
        </Container>
      </>
    );
  }
}
