import React, { Component } from 'react'
import {Container} from 'native-base'
import {View, Text, ScrollView} from 'react-native'
import Logo from 'react-native-vector-icons/MaterialIcons';

export default class Activation extends Component {
  render() {
    return (
      <>
        <Container>
        <ScrollView>
          
        </ScrollView>
        <View
            style={{
              backgroundColor: '#633a82',
              justifyContent: 'center',
              alignItems: 'center',
              flex: 0.45,
            }}>
            <Logo name="card-travel" size={80} color="white" />
            <Text style={{color: 'white', fontSize: 20}}>
              Trust your journey to us
            </Text>
          </View>
        </Container>
      </>
    )
  }
}
