import { combineReducers } from "redux";
import { REFERSH_ELECTIONS_LIST_REQUEST_ACTION } from "../actions/votingSystemActions";


export const electionReducer = (elections=[],actions) =>{
    if(actions.type === REFERSH_ELECTIONS_LIST_REQUEST_ACTION)
    return actions.elections;

return elections;
}

//TODO : Create a done action here


export const votingSystemReducer = combineReducers
({
    elections : electionReducer,
    //TODO  : add reducers to be combined here
});