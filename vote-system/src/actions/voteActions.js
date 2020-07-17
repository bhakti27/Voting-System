export const SHOW_BALLOT_ACTION = "SHOW_BALLOT";
export const REFRESH_VOTE_PAGE_REQUEST_ACTION ="REFRESH_SHOW_PAGE";
export const SHOW_ERROR_ACTION = "SHOW_ERROR";
export const TOGGLE_ACTION_REQUEST ="TOGGLE_ACTION";
export const TOGGLE_ERROR_ACTION_REQUEST ="TOGGLE_ERROR_ACTION";



  export const createToggleAction =(value)=> ({
    type:TOGGLE_ACTION_REQUEST,value});

  export const createToggleErroAction = (value)=>({
    type:TOGGLE_ERROR_ACTION_REQUEST,value});


