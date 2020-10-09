import {createStore, combineReducers, applyMiddleware} from 'redux';
import Thunk from 'redux-thunk';

import {DataStore, filmsData} from './reducers';

export interface Store {
  filmsData: DataStore;
}

const rootReducer = combineReducers({filmsData});
export const store = createStore(rootReducer, applyMiddleware(Thunk));
