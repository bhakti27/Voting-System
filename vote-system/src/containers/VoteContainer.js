
import React, { useMemo, useEffect } from 'react';
import {Identification} from '../components/Indetification';
import { useSelector, useDispatch } from 'react-redux';
import {BallotForm} from '../components/BallotForm';
import { refreshVoters} from '../actions/voterRegistrationActions';
import { bindActionCreators } from 'redux';



export const VoteContainer = () => {


    const stateProps = useSelector(state => state);
    const dispatch = useDispatch();
    const dispatchProps = useMemo(() => bindActionCreators({
        onRefreshVoters: refreshVoters,
        // onValidation: showBallot,
    }, dispatch), [ dispatch ]);
    useEffect(() => {

        dispatchProps.onRefreshVoters();
    
      }, [ dispatchProps ]);

    return (
    <>
    <Identification {...dispatchProps} {...stateProps }/>
    <BallotForm {...stateProps}/>
    </>)
}