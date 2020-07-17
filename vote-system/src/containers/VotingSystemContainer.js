import React, { useMemo, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import { refreshElectionsList } from '../actions/votingSystemActions';
import { VoterRegistration } from '../components/VoterRegistration';
import { LoadingModal } from '../components/LoadingModal';
import {
    refreshVoters,
    addVoter, deleteVoter, saveVoter,
    createEditVoterAction,
    createCancelVoterAction,
} from '../actions/voterRegistrationActions';
import {Identification} from '../components/Identification';

export const VotingSystemContainer = () => {


    const stateProps = useSelector(state => state);
    const dispatch = useDispatch();
    // const dispatchProps = useMemo(() => bindActionCreators({
    //     onRefreshElections: refreshElectionsList,
    // }, dispatch), [dispatch]);

    const dispatchProps = useMemo(() => bindActionCreators({
        onRefreshVoters: refreshVoters,
        onAddVoter: addVoter,
        onSaveVoter: saveVoter,
        onDeleteVoter: deleteVoter,
        onEditVoter: createEditVoterAction,
        onCancelVoter: createCancelVoterAction,
        onRefreshElections: refreshElectionsList,
    }, dispatch), [dispatch]);

    useEffect(() => {

        dispatchProps.onRefreshVoters();

    }, [ dispatchProps ]);

    return <>
    <VoterRegistration {...dispatchProps} {...stateProps} />
    <LoadingModal isLoading={stateProps.isLoading} />
    </>;
};