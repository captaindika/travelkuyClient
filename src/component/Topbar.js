import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import * as React from 'react';
// screen
import Transaction from '../screen/Transaction';
import Topup from '../screen/Topup';

const Tab = createMaterialTopTabNavigator();

function Top() {
  return (
    <Tab.Navigator
      initialRouteName="Transaction"
      tabBarOptions={{
        activeTintColor: '#e91e63',
        labelStyle: { 
          fontSize: 18,
          fontWeight:'bold',
          color:'white' },
        style: { backgroundColor: '#633a82' },
      }}
    >
      <Tab.Screen
        name="Transaction"
        component={Transaction}
        options={{ tabBarLabel: 'History' }}
      />
      <Tab.Screen
        name="Top Up"
        component={Topup}
        options={{ tabBarLabel: 'Top Up' }}
      />
    </Tab.Navigator>
  )
}

export default Top;