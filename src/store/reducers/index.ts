import {Film} from '../models';

export interface DataStore {
  films: Array<Film>;
}

const initialState: DataStore = {
  films: [],
};

export const data = (state: DataStore = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
