import React from 'react';
import {TouchableOpacity, Dimensions, ScaledSize} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import {StackNavigationProp} from '@react-navigation/stack';

import {Film} from '../models/film';
import {styles} from '../screens/styles';
import {RootStackParamList} from '../navigation/Stack/RootStackParamList';
import {RootScreens} from '../screens/screens';

const {width}: ScaledSize = Dimensions.get('window');

interface Props {
  item: Film;
  navigation: StackNavigationProp<RootStackParamList, RootScreens.Home>;
}

const paddingAll: number = 42;
const coefOfScreen: number = 2;

export const CartFilm: React.FC<Props> = ({item, navigation}: Props) => (
  <TouchableOpacity onPress={() => navigation.navigate(RootScreens.Discription, {film: item})}>
    <AutoHeightImage
      style={styles.imageCart}
      width={(width - paddingAll) / coefOfScreen}
      source={{uri: `http://image.tmdb.org/t/p/w342${item.path}`}}
    />
  </TouchableOpacity>
);
