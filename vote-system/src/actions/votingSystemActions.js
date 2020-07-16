export const REFERSH_ELECTIONLIST_REQUEST_ACTION = "REQUEST_ELECTION_LIST_REQUEST";


export const creteRefreshElectionListAction = () => ({
    type: REFERSH_ELECTIONLIST_REQUEST_ACTION,
});

export const refreshElectionList = () => {
    return dispatch => {
        dispatch(creteRefreshElectionListAction());
        return fetch('http://localhost:3060/elections')
        .then(res => res.json());
    }
}


