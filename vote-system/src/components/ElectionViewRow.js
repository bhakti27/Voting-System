import React from 'react';

import { electionPropTypes } from '../propTypes/elections';

export const ElectionViewRow = ({
  election,
  onViewElectionResults,
}) => {
  
  return (
    <tr>
      <td>{election.id}</td>
      <td className="text">{election.name}</td>
      <td>
        <button type="button"
          onClick={() => onViewElectionResults(election.id)}>Results</button>
      </td>
    </tr>
  );

};

ElectionViewRow.propTypes = {
  election: electionPropTypes,
};