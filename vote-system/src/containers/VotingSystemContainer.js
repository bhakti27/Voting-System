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
  refreshElectionsList,
} from '../actions/votingSystemActions';
import {
  refreshQuestions, addQuestion, deleteQuestion,
} from '../actions/questionActions';
import { QuestionTool } from '../components/QuestionTool';
import { ElectionTool } from '../components/ElectionTool';
import { LoadingModal } from '../components/LoadingModal';
import { VoterRegistration } from '../components/VoterRegistration';
import { LoadingModal } from '../components/LoadingModal';
import { 
    refreshVoters, 
    addVoter, deleteVoter, saveVoter,
    createEditVoterAction, 
    createCancelVoterAction, 
} from '../actions/voterRegistrationActions';


export const VotingSystemContainer = () => {

  const stateProps = useSelector(state => state);

  const dispatch = useDispatch();

  const dispatchProps = useMemo(() => bindActionCreators({
    onRefreshElectionsList: refreshElectionsList,
 //   onAddElection: addElection,
    onRefreshQuestions: refreshQuestions,
    onAddQuestion: addQuestion,
    onDeleteQuestion: deleteQuestion,
}, dispatch), [ dispatch ]);

  
    const stateProps = useSelector(state => state);

    const dispatch = useDispatch();

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
      
        dispatchProps.onRefreshElectionsList();
        dispatchProps.onRefreshQuestions();
        dispatchProps.onRefreshVoters();
    
    }, [ dispatchProps ]);

    return <>
     <ElectionTool {...dispatchProps} {...stateProps} />
    <QuestionTool {...dispatchProps} {...stateProps} />
    <LoadingModal isLoading={stateProps.isLoading} />
    <VoterRegistration {...dispatchProps} {...stateProps} />
    <LoadingModal isLoading={stateProps.isLoading} />
    </>;

};