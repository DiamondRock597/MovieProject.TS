import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {RootScreens} from '../../screens/screens';
import {Favourite} from '../../screens/Favourite';

const Stack = createStackNavigator();

export const FavouriteStack = () => (
  <Stack.Navigator>
    <Stack.Screen name={RootScreens.Favourite} component={Favourite} />
  </Stack.Navigator>
);
