import { useState } from 'react';

import { useList } from './useList';

export const useVoterRegistrationStore = (initialVoters) => {

  const [ voters, appendVoter, replaceVoter, removeVoter ] = useList(initialVoters.concat());
  const [ editVoterId, setEditVoterId ] = useState(-1);

  const addVoter = (voter) => {
    appendVoter(voter);
    setEditVoterId(-1);
  };

  const saveVoter = (voter) => {
    replaceVoter(voter);
    setEditVoterId(-1);
  };

  const deleteVoter = (voterId) => {
    removeVoter(voterId);
    setEditVoterId(-1);
  };

  return {
    voters, editVoterId,
    addVoter, saveVoter, deleteVoter,
    editVoter: setEditVoterId,
    cancelVoter: () => setEditVoterId(-1),
  };

};