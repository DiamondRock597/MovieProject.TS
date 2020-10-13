import {Film as FilmModel} from '../../models/film';
import {FilmsActions, Actions} from '../actions/types';

export interface FilmData {
  films: Array<FilmModel>;
  error: string;
}

const initialState: FilmData = {
  films: [],
  error: '',
};

export const filmsData = (state: FilmData = initialState, action: Actions) => {
  switch (action.type) {
    case FilmsActions.GetData:
      return {...state, films: action.payload};
    case FilmsActions.AddFav:
      const newFilms: Array<FilmModel> = state.films.map((film: FilmModel) => {
        if (film.id === action.id) {
          const newFilm = {...film, favourite: !film.favourite};
          return newFilm;
        }
        return film;
      });
      return {
        ...state,
        films: newFilms,
      };
    case FilmsActions.Error:
      return {...state, error: action.error};
    default:
      return state;
  }
};
