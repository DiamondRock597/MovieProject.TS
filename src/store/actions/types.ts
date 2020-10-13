import {Film as FilmModel} from '../../models/film';

export enum FilmsActions {
  GetData = 'GET_DATA',
  AddFav = 'ADD_FAV',
  Error = 'ERROR',
}

export interface getData {
  type: FilmsActions.GetData;
  payload: Array<FilmModel>;
}

export interface addFav {
  type: FilmsActions.AddFav;
  id: number;
}

export interface Error {
  type: FilmsActions.Error;
  error: string;
}

export type Actions = getData | addFav | Error;
