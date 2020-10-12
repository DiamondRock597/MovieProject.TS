import {createStore, combineReducers, applyMiddleware} from 'redux';
import Thunk from 'redux-thunk';

import {FilmData, filmsData} from './reducers';

export interface Store {
  filmsData: FilmData;
}

const rootReducer = combineReducers({filmsData});
export const store = createStore(rootReducer, applyMiddleware(Thunk));
