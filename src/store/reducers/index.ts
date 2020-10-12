import {Film as FilmModel} from '../../models/film';
import {FilmsActions, Actions} from '../actions/types';

export interface FilmData {
  films: Array<FilmModel>;
}

const initialState: FilmData = {
  films: [],
};

export const filmsData = (state: FilmData = initialState, action: Actions) => {
  switch (action.type) {
    case FilmsActions.GetData:
      return {...state, films: action.payload};
    default:
      return state;
  }
};
