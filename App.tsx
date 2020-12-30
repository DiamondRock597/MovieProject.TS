import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Provider} from 'react-redux';

import {HomeStack} from './src/navigation/stack/HomeStack';
import {FavouriteStack} from './src/navigation/stack/FavouriteStack';
import {RootScreens} from './src/screens/screens';
import {store} from './src/store/store';

const Drawer = createDrawerNavigator();

export const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Drawer.Navigator initialRouteName={RootScreens.Home}>
        <Drawer.Screen name={RootScreens.Home} component={HomeStack} />
        <Drawer.Screen name={RootScreens.Favourite} component={FavouriteStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  </Provider>
);
