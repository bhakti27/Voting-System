import React, { useMemo, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import {
  addVoter, createSaveVoterRequestAction,
  createDeleteVoterRequestAction, createEditVoterAction,
  createCancelVoterAction, refreshVoters,
} from '../actions/voterRegistrationActions';

import { VoterRegistration } from '../components/VoterRegistration';
import { LoadingModal } from '../components/LoadingModal';


export const VoterRegistrationContainer = () => {

  const stateProps = useSelector(state => state);

  const dispatch = useDispatch();

  const dispatchProps = useMemo(() => bindActionCreators({
    onRefreshVoters: refreshVoters,
    onAddVoter: addVoter,
    onSaveVoter: createSaveVoterRequestAction,
    onDeleteVoter: createDeleteVoterRequestAction,
    onEditVoter: createEditVoterAction,
    onCancelVoter: createCancelVoterAction,
  }, dispatch), [ dispatch ]);

  useEffect(() => {

    dispatchProps.onRefreshVoters();

  }, [ dispatchProps ]);

  return <>
    <VoterRegistration {...dispatchProps} {...stateProps} />
    <LoadingModal isLoading={stateProps.isLoading} />
    
    
  </>;
};