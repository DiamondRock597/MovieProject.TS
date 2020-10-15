import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';
import {StackNavigationProp} from '@react-navigation/stack';
import {connect} from 'react-redux';

import {CartFilm} from '../components/CartFilm';
import {Store} from '../store/store';
import {Film} from '../models/film';
import {styles} from './styles';
import {RootStackParamList} from '../navigation/stack/RootStackParamList';
import {RootScreens} from './screens';

interface Props {
  films: Array<Film>;
  navigation: StackNavigationProp<RootStackParamList, RootScreens.Favourite>;
}
const FavouriteContainer: React.FC<Props> = (props) => (
  <SafeAreaView>
    <FlatGrid
      data={props.films}
      contentContainerStyle={styles.imageBlock}
      itemDimension={130}
      spacing={15}
      keyExtractor={(item: Film): string => item.id.toString()}
      renderItem={({item}: {item: Film}) => <CartFilm navigation={props.navigation} item={item} />}
      ListEmptyComponent={<Text>Please add your favourite film</Text>}
    />
  </SafeAreaView>
);
const mapStateToProps = (state: Store) => ({films: state.filmsData.films.filter((item: Film) => item.favourite)});
export const Favourite = connect(mapStateToProps, null)(FavouriteContainer);
