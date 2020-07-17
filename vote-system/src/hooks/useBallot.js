import { useState } from 'react';


export const useShowBallot = (initialShowBallot) => {

  const [ showBallot, setshowBallot] = useState(initialShowBallot);

  const changeShowBallot = () => {
    setshowBallot({showBallot:true});
  };  

  const resetshowBallot = () => setshowBallot(initialShowBallot);

  return [ showBallot, changeShowBallot, resetshowBallot ];  

};