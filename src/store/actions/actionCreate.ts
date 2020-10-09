import {ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';

import {Film as FilmModel} from '../../models/film';
import {Film as FilmDTO} from '../../dto/film';
import {getData, FilmsActions} from '../actions/types';
import {Store} from '../store';

export const getFilms = () => async (dispatch: ThunkDispatch<Store, null, AnyAction>) => {
  try {
    const res = await fetch('http://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c');
    const data: {results: Array<FilmDTO>} = await res.json();
    const payload: Array<FilmModel> = data.results.map((item: FilmDTO) => FilmModel.parse(item));
    const getFilm: getData = {type: FilmsActions.GetData, payload};
    dispatch(getFilm);
  } catch (error) {}
};
