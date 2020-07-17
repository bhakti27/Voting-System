import { useState } from 'react';


export const useError = (initialShowError) => {

  const [ showError, setshowError] = useState(initialShowError);

  const changeShowError = () => {
    setshowError(true);
  };  

  const resetshowError = () => setshowError(initialShowError);

  return [ showError, changeShowError, resetshowError ];  

};