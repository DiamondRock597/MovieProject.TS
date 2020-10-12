import React from 'react';
import {SafeAreaView, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import {FlatGrid} from 'react-native-super-grid';
import {Store} from '../store/store';
import {getFilms} from '../store/actions/actionCreate';
import {Film} from '../models/film';
import {styles} from './styles';
import {CartFilm} from '../components/CartFilm';
import {HeaderHome} from '../components/HeaderHome';

import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/Stack/RootStackParamList';
import {RootScreens} from './screens';

interface Props {
  films: Array<Film>;
  navigation: StackNavigationProp<RootStackParamList, RootScreens.Home>;
  getFilms(): void;
}

class HomeContainer extends React.Component<Props> {
  public componentDidMount() {
    this.props.getFilms();
  }
  public render() {
    const films = this.props.films;
    return (
      <SafeAreaView>
        <FlatGrid
          ListHeaderComponent={HeaderHome}
          data={films}
          contentContainerStyle={styles.imageBlock}
          itemDimension={125}
          spacing={15}
          keyExtractor={(item: Film): string => item.id.toString()}
          renderItem={({item}: {item: Film}) => <CartFilm navigation={this.props.navigation} item={item} />}
          ListEmptyComponent={<ActivityIndicator style={styles.activeIndicator} size="large" color="#00ff00" />}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state: Store) => ({films: state.filmsData.films});

export const Home = connect(mapStateToProps, {getFilms})(HomeContainer);
