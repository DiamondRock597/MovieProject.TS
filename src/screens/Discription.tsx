import React from 'react';
import {ScrollView, View, Dimensions, Text} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AutoHeightImage from 'react-native-auto-height-image';

import {RootStackParamList} from '../navigation/Stack/RootStackParamList';
import {RootScreens} from '../screens/screens';
import {styles} from './styles';

const {width} = Dimensions.get('window');

interface Props {
  route: RouteProp<RootStackParamList, RootScreens.Discription>;
}

export const Discription: React.FC<Props> = (props) => {
  const {film} = props.route.params;
  const releaseData = new Date(film.releaseDate);
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View>
          <AutoHeightImage
            width={(width - 10) / 2}
            source={{
              uri: `http://image.tmdb.org/t/p/w342${film.path}`,
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.textRatingBlock}>
          <Icon name={'glass'} onPress={() => console.log(this)} size={30} color="yellow" />
          <Text style={styles.textRating}>
            <Text style={styles.headerTitle}>Score:</Text>
            {'\n'} {film.voteAverage}
          </Text>
          <Text style={styles.textRating}>
            <Text style={styles.headerTitle}>Rating:{'\n'}</Text> {film.adult ? 'R' : 'PG'}
          </Text>
          <Text style={styles.textRating}>
            <Text style={styles.headerTitle}>Release Data:</Text>
            {'\n'} {releaseData.toDateString().slice(3)}
          </Text>
        </View>
      </View>
      <View style={styles.center}>
        <View>
          <Text style={styles.name}>
            {film.originalTitle}({releaseData.toDateString().slice(-4)})
          </Text>
        </View>
        <View>
          <Text style={styles.overview}>{film.overview}</Text>
        </View>
      </View>
    </ScrollView>
  );
};
