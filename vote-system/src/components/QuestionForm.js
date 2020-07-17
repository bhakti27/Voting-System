import React from 'react';
import PropTypes from 'prop-types';

import { useForm } from '../hooks/useForm';

export const QuestionForm = ({ buttonText, onSubmitQuestion }) => {

  const [ questionForm, change, resetQuestionForm ] = useForm({
    name: '',
//    hexcode: '',
  });

  const submitQuestion = () => {
    onSubmitQuestion(questionForm);
    resetQuestionForm();
  };

  return (
    <form>
      <div>
        <label htmlFor="name-input">Question for a new election</label>
        <input type="text" id="name-input" name="name"
          value={questionForm.name} onChange={change} />
      </div>
      {/* <div>
        <label htmlFor="hexcode-input">Hexcode</label>
        <input type="text" id="hexcode-input" name="hexcode"
          value={questionForm.hexcode} onChange={change} />
      </div> */}
      <button type="button" onClick={submitQuestion}>{buttonText}</button>
    </form>
  );

};

QuestionForm.defaultProps = {
  buttonText: 'Submit Question',
};

QuestionForm.propTypes = {
  buttonText: PropTypes.string,
  onSubmitQuestion: PropTypes.func.isRequired,
};