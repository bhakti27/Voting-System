import { combineReducers } from "redux";
import {
  EDIT_VOTER_ACTION, CANCEL_VOTER_ACTION, REFRESH_VOTERS_DONE_ACTION,
} from '../actions/voterRegistrationActions';
import { questionsReducer } from "./questionToolReducers";
import { REFRESH_ELECTIONS_LIST_DONE_ACTION } from "../actions/votingSystemActions";
import {TOGGLE_ACTION_REQUEST,TOGGLE_ERROR_ACTION_REQUEST} from '../actions/voteActions';

export const electionReducer = (elections = [], action) => {
    if (action.type === REFRESH_ELECTIONS_LIST_DONE_ACTION)
        return action.elections;

    return elections;
}
  
  export const votersReducer = (voters = [], action) => {
  
    if (action.type === REFRESH_VOTERS_DONE_ACTION) {
      return action.voters;
    }

    return voters;
  
  };
  
  export const editVoterIdReducer = (editVoterId = -1, action) => {
  
    if (action.type === EDIT_VOTER_ACTION) {
      return action.voterId;
    }
  
    if ([
      CANCEL_VOTER_ACTION,
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

  export const isErrorVisibleReducer = (isErrorVisible = false,action)=>{
    if(action.type===TOGGLE_ERROR_ACTION_REQUEST){return true;}
    return isErrorVisible;
  };
  export const isBallotVisibleReducer = (isBallotVisble=false,action)=>{
    if(action.type===TOGGLE_ACTION_REQUEST){return true;}
    return isBallotVisble;
  }

export const votingSystemReducer = combineReducers({
    isLoading: isLoadingReducer,
    voters: votersReducer,
    editVoterId: editVoterIdReducer,
    elections : electionReducer,
    isErrorVisible: isErrorVisibleReducer,
    isBallotVisible:isBallotVisibleReducer,
    questions: questionsReducer,
});