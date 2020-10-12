import {Film as FilmModel} from '../../models/film';

export enum FilmsActions {
  GetData = 'GET_DATA',
  ADD_FAV = 'ADD_FAV',
}

export interface getData {
  type: FilmsActions.GetData;
  payload: Array<FilmModel>;
}

export type Actions = getData;
