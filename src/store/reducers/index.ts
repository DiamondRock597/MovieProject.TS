import {Film as FilmModel} from '../../models/film';
import {FilmsActions, Actions} from '../actions/types';

export interface DataStore {
  films: Array<FilmModel>;
}

const initialState: DataStore = {
  films: [],
};

export const filmsData = (state: DataStore = initialState, action: Actions) => {
  switch (action.type) {
    case FilmsActions.GetData:
      return {...state, films: action.payload};
    default:
      return state;
  }
};
