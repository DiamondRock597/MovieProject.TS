import React from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';
import {Store} from '../store/store';
import {Film} from '../models/film';

interface Props {
  films: Array<Film>;
}
const FavouriteContainer: React.FC<Props> = () => <Text>123</Text>;
const mapStateToProps = (state: Store) => ({films: state.filmsData.films.filter((item: Film) => item.favourite)});
export const Favourite = connect(mapStateToProps, null)(FavouriteContainer);
