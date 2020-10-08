import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {RootScreens} from '../../screens/screens';
import {Home} from '../../screens/Home';

const Stack = createStackNavigator();

export const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name={RootScreens.Home} component={Home} />
  </Stack.Navigator>
);
