import { combineReducers } from 'redux';

import { REFRESH_QUESTIONS_DONE_ACTION } from '../actions/questionActions';

export const questionsReducer = (questions = [], action) => {

  if (action.type === REFRESH_QUESTIONS_DONE_ACTION) {
    return action.questions;
  }

  return questions;
};

export const isLoadingReducer = (isLoading = false, action) => {

  if (action.type.endsWith('_REQUEST')) {
    return true;
  }

  if (action.type.endsWith('_DONE')) {
    return false;
  }

  return isLoading;
};

export const questionToolReducer = combineReducers({
  isLoading: isLoadingReducer,
  questions: questionsReducer,
});