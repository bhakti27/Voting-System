import { combineReducers } from "redux";

import {
  SAVE_VOTER_ACTION, DELETE_VOTER_ACTION,
  EDIT_VOTER_ACTION, CANCEL_VOTER_ACTION, REFRESH_VOTERS_DONE_ACTION,
} from '../actions/voterRegistrationActions';

export const votersReducer = (voters = [], action) => {

  switch (action.type) {
    case REFRESH_VOTERS_DONE_ACTION:
      return action.voters;
    case SAVE_VOTER_ACTION:
      const voterIndex = voters.findIndex(c => c.id === action.voter.id);
      const newVoters = voters.concat();
      newVoters[voterIndex] = action.voter;
      return newVoters;
    case DELETE_VOTER_ACTION:
      return voters.filter(c => c.id !== action.voterId);
    default:
      return voters;
  }

};

export const editVoterIdReducer = (editVoterId = -1, action) => {

  if (action.type === EDIT_VOTER_ACTION) {
    return action.voterId;
  }

  if ([
    SAVE_VOTER_ACTION,
    DELETE_VOTER_ACTION, CANCEL_VOTER_ACTION,
    REFRESH_VOTERS_DONE_ACTION,
  ].includes(action.type)) {
    return -1;
  }

  return editVoterId;

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

export const voterReducer = combineReducers({
  isLoading: isLoadingReducer,
  voters: votersReducer,
  editVoterId: editVoterIdReducer,
});