export const REFRESH_ELECTIONS_LIST_REQUEST_ACTION = "REFRESH_ELECTIONS_LIST_REQUEST";


export const creteRefreshElectionsListRequestAction = () => ({
    type: REFRESH_ELECTIONS_LIST_REQUEST_ACTION,
});

export const refreshElectionsList = () => {
    return dispatch => {
        dispatch(creteRefreshElectionsListRequestAction());
        return fetch('http://localhost:3060/elections')
        .then(res => { res.json()});
        //TODO : utitlize Done action here to return elections object
    }
}


