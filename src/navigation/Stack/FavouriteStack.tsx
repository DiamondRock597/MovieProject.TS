import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {RootScreens} from '../../screens/screens';
import {Favourite} from '../../screens/Favourite';
import {MenuButton} from '../../components/MenuButton';
import {Discription} from '../../screens/Discription';
const Stack = createStackNavigator();

export const FavouriteStack = () => (
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
    <Stack.Screen
      options={({navigation}) => ({
        headerLeft: () => <MenuButton handleOpen={() => navigation.openDrawer()} />,
      })}
      name={RootScreens.Favourite}
      component={Favourite}
    />
    <Stack.Screen name={RootScreens.Discription} component={Discription} />
  </Stack.Navigator>
);
