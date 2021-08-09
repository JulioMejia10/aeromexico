import { createStore } from 'redux';
import Reducer from '../reducer/index';

const initialState = [];

export const store = createStore(Reducer, initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());