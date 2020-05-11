import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {View, Text} from 'react-native';

// Screen
import Home from '../screen/Home';
import Schedule from '../screen/Schedule';
import Register from '../screen/Register';
import Login from '../screen/Login';
import BottomBar from '../component/Bottombar';
import Forget from '../screen/Forget';
import Reset from '../screen/Reset';

const Stack = createStackNavigator();

function StackScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="Schedule"
          component={Schedule}
          options={{
            title: 'Find Schedule',
            headerStyle: {
              backgroundColor: '#481380',
              height: 100,
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
              alignSelf: 'center',
            },
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Travelkuy',
            headerStyle: {
              backgroundColor: '#481380',
              height: 100,
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
              alignSelf: 'center',
            },
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            title: 'Register',
            headerStyle: {
              backgroundColor: '#481380',
              height: 100,
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
              alignSelf: 'center',
            },
          }}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Bottombar" component={BottomBar} />
        <Stack.Screen name='Forget' component={Forget} />
        <Stack.Screen name='Reset' component={Reset} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackScreen;
