import { combineReducers } from "redux";
import { REFRESH_ELECTIONS_LIST_DONE_ACTION } from "../actions/votingSystemActions";


export const electionReducer = (elections=[], action) =>{
    if(action.type === REFRESH_ELECTIONS_LIST_DONE_ACTION)
    return action.elections;

return elections;
}

//TODO : Create a done action here


export const votingSystemReducer = combineReducers
({
    elections : electionReducer,
    //TODO  : add reducers to be combined here
});