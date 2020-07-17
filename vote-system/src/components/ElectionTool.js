import React from 'react';

import { ToolHeader } from './ToolHeader';
import { ElectionTable } from './ElectionTable';
import { ElectionForm } from './ElectionForm';

import "./ToolHeader.css";

export const ElectionTool = ({
  elections, 
  onAddElection: addElection,
}) => {

  return (
    <div className="elections">
      <ToolHeader headerText="Elections" />
      <ElectionTable elections={elections} />
      <ElectionForm onSubmitElection={addElection} />
    </div>
  );

};