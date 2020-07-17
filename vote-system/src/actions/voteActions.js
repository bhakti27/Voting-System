export const SHOW_BALLOT_ACTION = "SHOW_BALLOT";
export const REFRESH_VOTE_PAGE_REQUEST_ACTION ="REFRESH_SHOW_PAGE";
export const SHOW_ERROR_ACTION = "SHOW_ERROR";



export const createRefreshVotePageRequestAction = () => ({
    type: REFRESH_VOTE_PAGE_REQUEST_ACTION,
  });

  export const createShowErrorAction =()=> {
    
  }


  export const showBallot = () => {
    return dispatch => {

        dispatch(createRefreshVotersRequestAction());
        return fetch('http://localhost:3060/voters')
          .then(res => res.json())
          .then(voters => dispatch(createRefreshVotersDoneAction(voters)));
    
      };
  }

