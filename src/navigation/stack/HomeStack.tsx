import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {RootScreens} from '../../screens/screens';
import {Home} from '../../screens/Home';
import {Discription} from '../../screens/Discription';
import {MenuButton} from '../../components/MenuButton';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {RootStackParamList} from './RootStackParamList';

const Stack = createStackNavigator();

interface OptionArgs {
  navigation: DrawerNavigationProp<RootStackParamList, RootScreens.Favourite>;
}
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
      options={({navigation}: OptionArgs) => ({
        headerLeft: () => <MenuButton handleOpen={() => navigation.openDrawer()} />,
      })}
      name={RootScreens.Home}
      component={Home}
    />
    <Stack.Screen name={RootScreens.Discription} component={Discription} />
  </Stack.Navigator>
);
