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

interface Props {
  films: Array<Film>;
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
          itemDimension={130}
          spacing={10}
          keyExtractor={(item: Film): string => item.id.toString()}
          renderItem={({item}: {item: Film}) => <CartFilm item={item} />}
          ListEmptyComponent={<ActivityIndicator style={styles.activeIndicator} size="large" color="#00ff00" />}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state: Store) => ({films: state.filmsData.films});

export const Home = connect(mapStateToProps, {getFilms})(HomeContainer);
