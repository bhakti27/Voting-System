export const REFRESH_VOTERS_REQUEST_ACTION = 'REFRESH_VOTERS_REQUEST';
export const REFRESH_VOTERS_DONE_ACTION = 'REFRESH_VOTERS_DONE';

export const ADD_VOTER_REQUEST_ACTION = 'ADD_VOTER_REQUEST';
export const SAVE_VOTER_ACTION = 'SAVE_VOTER';
export const DELETE_VOTER_ACTION = 'DELETE_VOTER';
export const EDIT_VOTER_ACTION = 'EDIT_VOTER';
export const CANCEL_VOTER_ACTION = 'CANCEL_VOTER';

export const createRefreshVotersRequestAction = () => ({
  type: REFRESH_VOTERS_REQUEST_ACTION,
});

export const createRefreshVotersDoneAction = voters => ({
  type: REFRESH_VOTERS_DONE_ACTION,
  voters,
});

export const refreshVoters = () => {

  return dispatch => {

    dispatch(createRefreshVotersRequestAction());
    return fetch('http://localhost:3060/voters')
      .then(res => res.json())
      .then(voters => dispatch(createRefreshVotersDoneAction(voters)));

  };

};

export const createAddVoterRequestAction = voter =>
  ({ type: ADD_VOTER_REQUEST_ACTION, voter });


export const addVoter = voter => {

  return dispatch => {

    dispatch(createAddVoterRequestAction(voter));
    return fetch('http://localhost:3060/voters', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(voter),
    })
      .then(() => dispatch(refreshVoters()));

  };

};


export const createSaveVoterAction = voter =>
  ({ type: SAVE_VOTER_ACTION, voter });
export const createDeleteVoterAction = voterId =>
  ({ type: DELETE_VOTER_ACTION, voterId });
export const createEditVoterAction = voterId =>
  ({ type: EDIT_VOTER_ACTION, voterId });
export const createCancelVoterAction = () =>
  ({ type: CANCEL_VOTER_ACTION });