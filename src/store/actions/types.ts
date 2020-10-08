import {Film} from '../models';

export enum FilmsActions {
  GET_DATA = 'GET_DATA',
  ADD_FAV = 'ADD_FAV',
}

export interface getData {
  type: FilmsActions.GET_DATA;
  payload: {films: Array<Film>};
}
