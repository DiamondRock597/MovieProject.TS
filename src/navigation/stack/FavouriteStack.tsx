import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {RootScreens} from '../../screens/screens';
import {Favourite} from '../../screens/Favourite';
import {MenuButton} from '../../components/MenuButton';
import {Discription} from '../../screens/Discription';
import {RootStackParamList} from './RootStackParamList';

const Stack = createStackNavigator();

interface OptionArgs {
  navigation: DrawerNavigationProp<RootStackParamList, RootScreens.Favourite>;
}

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
      options={({navigation}: OptionArgs) => ({
        headerLeft: () => <MenuButton handleOpen={() => navigation.openDrawer()} />,
      })}
      name={RootScreens.Favourite}
      component={Favourite}
    />
    <Stack.Screen name={RootScreens.Discription} component={Discription} />
  </Stack.Navigator>
);
