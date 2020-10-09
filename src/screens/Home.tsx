import React from 'react';
import {Text, FlatList, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';

import {Store} from '../store/store';
import {getFilms} from '../store/actions/actionCreate';
import {Film} from '../models/film';
import {styles} from './styles';

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
        <FlatList
          data={films}
          keyExtractor={(item: Film): string => item.id.toString()}
          renderItem={({item}: {item: Film}) => <Text>{item.id}</Text>}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state: Store) => ({films: state.filmsData.films});

export const Home = connect(mapStateToProps, {getFilms})(HomeContainer);
