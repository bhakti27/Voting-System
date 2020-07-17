
import React, { useMemo, useEffect } from 'react';
import {Identification} from '../components/Identification';
import { useSelector, useDispatch } from 'react-redux';
import {BallotForm} from '../components/BallotForm';
import { refreshVoters} from '../actions/voterRegistrationActions';
import { bindActionCreators } from 'redux';
import {useShowBallot} from '../hooks/useBallot';
import {useError} from '../hooks/useError';
import {Error} from '../components/Error';

export const VoteContainer = () => {


    const stateProps = useSelector(state => state);
    const dispatch = useDispatch();
    const dispatchProps = useMemo(() => bindActionCreators({
        onRefreshVoters: refreshVoters,
        // onValidation: showBallot,
    }, dispatch), [ dispatch ]);
   const  [ showBallot, changeShowBallot, resetShowBallot ] = useShowBallot(false);
   const [ showError, changeShowError, resetshowError] = useError(false);

   
   const electionId =1; 
   useEffect(() => {

        dispatchProps.onRefreshVoters();
    
      }, [ dispatchProps ]);

    return (
    <>
    <Identification elections={stateProps.elections}
    chageVisiblityOfBallot ={changeShowBallot}
    resetShowBallot={resetShowBallot} 
    changeVisibilityOfError={changeShowError}
    resetshowError={resetshowError}
    />
    <BallotForm electionId={electionId} 
    elections={stateProps.elections} 
    showBallot={showBallot}
    />
    <Error showError={showError}
    changeShowError={changeShowError}/>
    </>)
}