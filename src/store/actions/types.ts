import {Film as FilmModel} from '../../models/film';

export enum FilmsActions {
  GetData = 'GET_DATA',
  AddFav = 'ADD_FAV',
}

export interface getData {
  type: FilmsActions.GetData;
  payload: Array<FilmModel>;
}

export interface addFav {
  type: FilmsActions.AddFav;
  id: number;
}

export type Actions = getData | addFav;
