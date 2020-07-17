
import React, { useMemo, useEffect } from 'react';
import {Identification} from '../components/Identification';
import { useSelector, useDispatch } from 'react-redux';
import {BallotForm} from '../components/BallotForm';
import { refreshVoters} from '../actions/voterRegistrationActions';
import { bindActionCreators } from 'redux';
import {Error} from '../components/Error';
import {createToggleAction,createToggleErroAction} from '../actions/voteActions'

export const VoteContainer = () => {

  //tODO : remove elections object from here
  const electionObj = [
    {
      "id": 1,
      "name": "Favorite pasttimes",
      "questions": [
        {
          "id": 1,
          "question": "I like to go for walks"
        },
        {
          "id": 2,
          "question": "I like to swim"
        }
      ]
    }];

    const stateProps = useSelector(state => state);
    const dispatch = useDispatch();
    const dispatchProps = useMemo(() => bindActionCreators({
        onRefreshVoters: refreshVoters,
        isBallotVisible:createToggleAction,
        isErrorVisible:createToggleErroAction
    }, dispatch), [ dispatch ]);
   
   const electionId =1; 
   console.log(stateProps.isErrorVisible);
   useEffect(() => {

        dispatchProps.onRefreshVoters();
    
      }, [ dispatchProps ]);

    return (
    <>
    <Identification voters={stateProps.voters}
    chageVisiblityOfBallot ={dispatchProps.isBallotVisible}
    changeVisibilityOfError={dispatchProps.isErrorVisible}
    isBallotVisible={stateProps.isBallotVisible}
    />
    <BallotForm electionId={electionId} 
    elections={stateProps.elections} 
    showBallot={stateProps.isBallotVisible} />
    <Error showError={stateProps.isErrorVisible}/>
    </>)
}