import { combineReducers } from 'redux';

import { REFRESH_QUESTIONS_DONE_ACTION } from '../actions/questionActions';

export const questionsReducer = (questions = [], action) => {

  if (action.type === REFRESH_QUESTIONS_DONE_ACTION) {
    return action.questions;
  }

  return questions;
};

export const questionToolReducer = combineReducers({
  questions: questionsReducer,
});