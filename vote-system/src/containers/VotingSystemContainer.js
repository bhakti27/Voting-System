// import React, { useMemo, useEffect } from 'react';
// import { bindActionCreators } from 'redux';
// import { useSelector, useDispatch } from 'react-redux';

// import { refreshElectionsList } from '../actions/votingSystemActions';

// export const VotingSystemContainer = () => {


//     const stateProps = useSelector(state => state);
//     const dispatch = useDispatch();
//     const dispatchProps = useMemo(() => bindActionCreators({
//         onRefreshElections: refreshElectionsList,
//     }, dispatch), [dispatch]);

//     useEffect(() => {
//         dispatchProps.onRefreshElections();
//     }, [dispatchProps]);
//     console.log("printing state");
//     console.log(stateProps);

//     return <div>Pass Table here</div>
// }

import React, { useMemo, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import {
  // addCar, saveCar,
  // deleteCar, createEditCarAction,
  // createCancelCarAction, 
  refreshElectionsList,
} from '../actions/votingSystemActions';

import { ElectionTool } from '../components/ElectionTool';
import { LoadingModal } from '../components/LoadingModal';

export const VotingSystemContainer = () => {

  const stateProps = useSelector(state => state);

  const dispatch = useDispatch();

  const dispatchProps = useMemo(() => bindActionCreators({
    onRefreshElectionsList: refreshElectionsList,
 //   onAddElection: addElection,
    // onSaveCar: saveCar,
    // onDeleteCar: deleteCar,
    // onEditCar: createEditCarAction,
    // onCancelCar: createCancelCarAction,
  }, dispatch), [ dispatch ]);

  useEffect(() => {

    dispatchProps.onRefreshElectionsList();

  }, [ dispatchProps ]);


  return <>
    <ElectionTool {...dispatchProps} {...stateProps} />
    <LoadingModal isLoading={stateProps.isLoading} />
  </>;
};