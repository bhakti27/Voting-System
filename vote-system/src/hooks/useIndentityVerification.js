import { useState } from 'react';


export const useIndentityVerification = (initialVerificationId) => {

  const [ verificationId, setVerificationId] = useState(initialVerificationId);

  const change = (e) => {
    setVerificationId("This is true");
  };  

  const resetVerificationId = () => setVerificationId(initialVerificationId);

  return [ verificationId, change, resetVerificationId ];  

};