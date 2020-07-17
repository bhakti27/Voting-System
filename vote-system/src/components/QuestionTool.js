import React from 'react';

import { ToolHeader } from './ToolHeader';
import { ItemList } from './ItemList';
import { QuestionForm } from './QuestionForm';

import './QuestionTool.css';

export const QuestionTool = ({
  questions,
  onAddQuestion: addQuestion,
  onDeleteQuestion: deleteQuestion,
}) => {

  return (
    <div className="question-tool">
      <ToolHeader headerText={ 'Question Tool' } />
      <ItemList items={questions}
        // contentFn={question => question.name + ' ' + question.hexcode}
        contentFn={question => question.name}
        actionButtonText="X" onAction={deleteQuestion} />
      <QuestionForm buttonText="Add Question" onSubmitQuestion={addQuestion} />
    </div>
  );

};
