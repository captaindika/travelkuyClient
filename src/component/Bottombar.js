import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Iconbot from 'react-native-vector-icons/MaterialCommunityIcons';
import * as React from 'react';
// screen
import Home from '../screen/Home';
import Profile from '../screen/Profile';
import Top from '../component/Topbar';

const Tab = createMaterialBottomTabNavigator();
function BottomBar() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#f6f4e6"
      inactiveColor="#481380"
      barStyle={{backgroundColor: '#694fad'}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Iconbot name="home-circle" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <Iconbot name="account-circle" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen name="Top" component={Top} options={{
          tabBarLabel: 'Transaction',
          tabBarIcon: ({color}) => (
            <Iconbot name="bank-transfer" color={color} size={26} />
          ),
        }}/>
    </Tab.Navigator>
  );
}

export default BottomBar;
