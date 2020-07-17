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

  useEffect(() => {

    dispatchProps.onRefreshElectionsList();
    dispatchProps.onRefreshQuestions();

  }, [ dispatchProps ]);


  return <>
    <ElectionTool {...dispatchProps} {...stateProps} />
    <QuestionTool {...dispatchProps} {...stateProps} />
    <LoadingModal isLoading={stateProps.isLoading} />
  </>;
};