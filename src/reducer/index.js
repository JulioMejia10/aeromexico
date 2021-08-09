import { FAV } from '../actions';

const reducer = (state, action) => {// eslint-disable-next-line
  switch (action.type) {
    case FAV:
      return [...state, action.payload];
  }
  return state;
};

export default reducer;

