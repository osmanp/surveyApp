import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import AppReducer from '../reducers/app.reducer';


export const initializeStore = (preloadedState = {count:0}) => {
    return createStore(
      AppReducer,
      preloadedState,
      composeWithDevTools(applyMiddleware())
    );
  };
  