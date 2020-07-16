import React, { useMemo, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import {
  addVoter, createSaveVoterAction,
  createDeleteVoterAction, createEditVoterAction,
  createCancelVoterAction, refreshVoters,
} from '../actions/voterRegistrationActions';

import { VoterRegistration } from '../Components/VoterRegistration';
import { LoadingModal } from '../Components/LoadingModal';

export const VoterRegistrationContainer = () => {

  const stateProps = useSelector(state => state);

  const dispatch = useDispatch();

  const dispatchProps = useMemo(() => bindActionCreators({
    onRefreshVoters: refreshVoters,
    onAddVoter: addVoter,
    onSaveVoter: createSaveVoterAction,
    onDeleteVoter: createDeleteVoterAction,
    onEditVoter: createEditVoterAction,
    onCancelVoter: createCancelVoterAction,
  }, dispatch), [ dispatch ]);

  useEffect(() => {

    dispatchProps.onRefreshVoters();

  }, [ dispatchProps ]);


  // return <>
  //   <VoterRegistration {...dispatchProps} {...stateProps} />
  //   <LoadingModal isLoading={stateProps.isLoading} />

  return <>
    <VoterRegistration {...dispatchProps} {...stateProps} />
  </>;
};