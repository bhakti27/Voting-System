import React from 'react';

import { ToolHeader } from './ToolHeader';
import { ElectionTable } from './ElectionTable';
import { ElectionForm } from './ElectionForm';

import "./ElectionTool.css";

export const ElectionTool = ({
  elections, //tempElection, tempQuestions
//  onCreateElection: createElection
}) => {

  return (
    <div className="election-tool">
      {/* <ToolHeader headerText="Election Tool" /> */}
      <ElectionTable elections={elections} />
      {/* <ItemList items={questions}
        contentFn={question => question.name}
        actionButtonText="X" onAction={deleteQuestion} />
      <ElectionForm buttonText="Create Election" onCreateElection={createElection} /> */}
    </div>
  );

};