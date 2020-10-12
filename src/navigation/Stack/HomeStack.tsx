import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {RootScreens} from '../../screens/screens';
import {Home} from '../../screens/Home';

const Stack = createStackNavigator();

export const HomeStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerTitleAlign: 'center',
      headerTitleStyle: {
        color: 'white',
        fontSize: 24,
      },
      headerStyle: {
        backgroundColor: '#6d6d82',
      },
      headerTintColor: 'white',
    }}>
    <Stack.Screen name={RootScreens.Home} component={Home} />
  </Stack.Navigator>
);
