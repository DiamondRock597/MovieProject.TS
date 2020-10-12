import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {TouchableOpacity, Dimensions} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';

import {Film} from '../models/film';
import {styles} from '../screens/styles';
import {RootStackParamList} from '../navigation/Stack/RootStackParamList';
import {RootScreens} from '../screens/screens';

const {width} = Dimensions.get('window');

interface Props {
  item: Film;
  navigation: StackNavigationProp<RootStackParamList, RootScreens.Discription>;
}

export const CartFilm: React.FC<Props> = ({item, navigation}) => (
  <TouchableOpacity onPress={() => navigation.navigate(RootScreens.Discription, {film: item})}>
    <AutoHeightImage style={styles.imageCart} width={(width - 42) / 2} source={{uri: `http://image.tmdb.org/t/p/w342${item.path}`}} />
  </TouchableOpacity>
);