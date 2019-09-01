import { combineReducers } from 'redux';
import page from 'src/client/store/reducers/pages/pages.reducer';
import example from 'src/client/store/__example/example.reducer';

export const reducers = {
  page,
  example,
};

export const createCombinedReducers = extraReducers => (
  combineReducers({ ...reducers, ...extraReducers })
);
