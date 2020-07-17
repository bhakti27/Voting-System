export const REFRESH_ELECTIONS_LIST_REQUEST_ACTION = "REFRESH_ELECTIONS_LIST_REQUEST";
export const REFRESH_ELECTIONS_LIST_DONE_ACTION = 'REFRESH_ELECTIONS_LIST_DONE';


export const creteRefreshElectionsListRequestAction = () => ({
    type: REFRESH_ELECTIONS_LIST_REQUEST_ACTION,
});
export const createRefreshElectionsListDoneAction = elections => ({
    type: REFRESH_ELECTIONS_LIST_DONE_ACTION,
    elections,
  });
  
export const refreshElectionsList = () => {

    return dispatch => {
        
        dispatch(creteRefreshElectionsListRequestAction());
        return fetch('http://localhost:3060/elections')
        .then(res => res.json())
        .then(elections => dispatch(createRefreshElectionsListDoneAction(elections)));
    };
};



