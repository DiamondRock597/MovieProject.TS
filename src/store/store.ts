import {createStore, combineReducers, applyMiddleware} from 'redux';
import Thunk from 'redux-thunk';

import {DataStore, data} from './reducers';

export interface Store {
  data: DataStore;
}

const rootReducer = combineReducers({data});
export const store = createStore(rootReducer, applyMiddleware(Thunk));
