import { useState } from 'react';


export const useIndentityVerification = (initialVerificationId) => {

  const [ verificationId, setVerificationId] = useState(initialVerificationId);

  const change = (e) => {
    setVerificationId({
      verificationId = e.target.value
    });
    verifyIdentity(verificationId);
  };  

  const resetForm = () => setForm(initialForm);

  return [ form, change, resetForm ];  

};