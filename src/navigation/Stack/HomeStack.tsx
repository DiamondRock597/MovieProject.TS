import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {RootScreens} from '../../screens/screens';
import {Home} from '../../screens/Home';
import {Discription} from '../../screens/Discription';
import {MenuButton} from '../../components/MenuButton';
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
    <Stack.Screen
      options={({navigation}) => ({headerLeft: () => <MenuButton handleOpen={() => navigation.openDrawer()} />})}
      name={RootScreens.Home}
      component={Home}
    />
    <Stack.Screen name={RootScreens.Discription} component={Discription} />
  </Stack.Navigator>
);
