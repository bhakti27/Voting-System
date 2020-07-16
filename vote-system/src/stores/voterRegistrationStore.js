import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { voterReducer } from '../reducers/voterRegistrationReducers';

export const voterRegistrationStore = createStore(
  voterReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
