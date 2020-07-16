import React, { createContext, useContext } from 'react';

import { useVoterRegistrationStore } from '../hooks/useVoterRegistrationStore';

const voterList = [];

const voterRegistrationContext = createContext(null);

// pass data to the context
export const VoterRegistrationProvider = ({ children }) => {

  const voterRegistrationStore = useVoterRegistrationStore(voterList);

  return <voterRegistrationContext.Provider value={voterRegistrationStore}>
    {children}
  </voterRegistrationContext.Provider>;

}

// retrieve data from the context
export const useVoterRegistrationContext = () => {
  return useContext(voterRegistrationContext);
};
