import {ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';

import {Film as FilmModel} from '../../models/film';
import {Film as FilmDTO} from '../../dto/film';
import {getData, FilmsActions} from '../actions/types';
import {Store} from '../store';

const getFilmAPI = (payload: Array<FilmModel>): getData => ({type: FilmsActions.GetData, payload});

export const getFilms = () => async (dispatch: ThunkDispatch<Store, null, AnyAction>) => {
  try {
    const res = await fetch('http://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c');
    const data: {results: Array<FilmDTO>} = await res.json();
    const payload: Array<FilmModel> = data.results.map((item: FilmDTO) => FilmModel.parse(item));
    dispatch(getFilmAPI(payload));
  } catch (error) {}
};
