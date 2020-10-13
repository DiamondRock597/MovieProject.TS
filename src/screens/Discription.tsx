import React, {Dispatch, useState} from 'react';
import {ScrollView, View, Dimensions, Text, ScaledSize} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AutoHeightImage from 'react-native-auto-height-image';
import {StackNavigationProp} from '@react-navigation/stack';
import {connect} from 'react-redux';

import {RootStackParamList} from '../navigation/Stack/RootStackParamList';
import {RootScreens} from '../screens/screens';
import {styles} from './styles';
import {Film} from '../models/film';
import {addFavouriteFilm} from '../store/actions/actionCreate';
import {addFav} from '../store/actions/types';

const {width}: ScaledSize = Dimensions.get('window');

interface Props {
  route: RouteProp<RootStackParamList, RootScreens.Discription>;
  navigation: StackNavigationProp<RootStackParamList, RootScreens.Home>;
  handlePress(id: number): void;
}

interface Params {
  film: Film;
}

const DiscriptionContainer: React.FC<Props> = (props) => {
  const paddingAll: number = 10;
  const countOfElemOnScreen: number = 2;
  const countSymbolForDate: number = 3;
  const countSymbolForYear: number = -4;
  const {film}: Params = props.route.params;
  const [favourite, setFavourite] = useState<boolean>(film.favourite);
  const releaseData: Date = new Date(film.releaseDate);
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View>
          <AutoHeightImage
            width={(width - paddingAll) / countOfElemOnScreen}
            source={{
              uri: `http://image.tmdb.org/t/p/w342${film.path}`,
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.textRatingBlock}>
          <Icon
            name={favourite ? 'star' : 'star-o'}
            onPress={() => {
              props.handlePress(film.id);
              setFavourite(!film.favourite);
            }}
            size={30}
            color="yellow"
          />
          <Text style={styles.textRating}>
            <Text style={styles.headerTitle}>Score:</Text>
            {'\n'} {film.voteAverage}
          </Text>
          <Text style={styles.textRating}>
            <Text style={styles.headerTitle}>Rating:{'\n'}</Text> {film.adult ? 'R' : 'PG'}
          </Text>
          <Text style={styles.textRating}>
            <Text style={styles.headerTitle}>Release Data:</Text>
            {'\n'} {releaseData.toDateString().slice(countSymbolForDate)}
          </Text>
        </View>
      </View>
      <View style={styles.center}>
        <View>
          <Text style={styles.name}>
            {film.originalTitle}({releaseData.toDateString().slice(countSymbolForYear)})
          </Text>
        </View>
        <View>
          <Text style={styles.overview}>{film.overview}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<addFav>) => ({handlePress: (id: number) => dispatch(addFavouriteFilm(id))});

export const Discription = connect(null, mapDispatchToProps)(DiscriptionContainer);
