import React from 'react';
import PropTypes from 'prop-types';

import {
  StringFormControl,
} from './FormControls';
import { useForm } from '../hooks/useForm';

export const ElectionForm = ({ onSubmitElection }) => {

  const [ electionForm, change, resetElectionForm ] = useForm({
    name: '',
    questions: [],
  });

  const submitElection = () => {
    onSubmitElection(electionForm);
    resetElectionForm();
  };

  return (
    <form>
      <StringFormControl caption="Election Name" name="name"
        value={electionForm.name} onChange={change} />
      {/* <StringFormControl caption="Question" name="question"
        value={questionForm.question} onChange={changeQuestion} />
      <button type="button" onClick={submitQuestion}>Add Question</button> */}
      <button type="button" onClick={submitElection}>Submit Election</button>
    </form>
  )

};

// CarForm.defaultProps = {
//   buttonText: 'Submit Car',
// };

ElectionForm.propTypes = {
  buttonText: PropTypes.string,
  onSubmitElectionList: PropTypes.func.isRequired,
};