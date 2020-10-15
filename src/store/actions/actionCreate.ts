import {ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';
import {FilmsActions, addFav, Error} from '../actions/types';
import {Store} from '../store';
import {MovieAPI} from '../../api/movies_api';
const err = (error: string): Error => ({type: FilmsActions.Error, error});

export const getFilms = () => async (dispatch: ThunkDispatch<Store, null, AnyAction>) => {
  try {
    await MovieAPI.fetchMovie(dispatch);
  } catch (error) {
    dispatch(err(error.message));
  }
};

export const addFavouriteFilm = (id: number): addFav => ({type: FilmsActions.AddFav, id});
