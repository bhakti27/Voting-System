import React, { useMemo, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import { refreshElectionsList } from '../actions/votingSystemActions';
import {Identification} from '../components/Indetification';

export const VotingSystemContainer = () => {


    const stateProps = useSelector(state => state);
    const dispatch = useDispatch();
    // const dispatchProps = useMemo(() => bindActionCreators({
    //     onRefreshElections: refreshElectionsList,
    // }, dispatch), [dispatch]);

    // useEffect(() => {
    //     dispatchProps.onRefreshElections();
    // }, [dispatchProps]);
console.log("printing elections");
console.log(stateProps);
    return <Identification {...stateProps }/>
}