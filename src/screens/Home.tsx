import React from 'react';
import {SafeAreaView, ActivityIndicator, Text} from 'react-native';
import {connect} from 'react-redux';
import {FlatGrid} from 'react-native-super-grid';
import {StackNavigationProp} from '@react-navigation/stack';

import {Store} from '../store/store';
import {getFilms} from '../store/actions/actionCreate';
import {Film} from '../models/film';
import {styles} from './styles';
import {CartFilm} from '../components/CartFilm';
import {HeaderHome} from '../components/HeaderHome';
import {RootStackParamList} from '../navigation/stack/RootStackParamList';
import {RootScreens} from './screens';

interface Props {
  films: Array<Film>;
  error: string;
  navigation: StackNavigationProp<RootStackParamList, RootScreens.Home>;
  getFilms(): void;
}

class HomeContainer extends React.Component<Props> {
  public componentDidMount() {
    this.props.getFilms();
  }
  public render() {
    const {films}: Props = this.props;
    const {error}: Props = this.props;

    return (
      <SafeAreaView>
        {error ? (
          <Text>{error}</Text>
        ) : (
          <FlatGrid
            ListHeaderComponent={HeaderHome}
            data={films}
            getItem={undefined}
            contentContainerStyle={styles.imageBlock}
            itemDimension={125}
            spacing={15}
            keyExtractor={(item: Film): string => item.id.toString()}
            renderItem={({item}: {item: Film}) => <CartFilm navigation={this.props.navigation} item={item} />}
            ListEmptyComponent={<ActivityIndicator style={styles.activeIndicator} size="large" color="#00ff00" />}
          />
        )}
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state: Store) => ({films: state.filmsData.films, error: state.filmsData.error});

export const Home = connect(mapStateToProps, {getFilms})(HomeContainer);
