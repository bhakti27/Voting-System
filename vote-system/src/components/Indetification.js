import React from 'react';
import {useIndentityVerification} from '../hooks/useIndentityVerification';


export const Identification = (props) => {

    const [ initialVerificationId, change, resetVerificationId ] = useIndentityVerification(undefined);


    const verifyAction = (e)=>{
        console.log(initialVerificationId);
       // resetVerificationId();
        
    } 

    return(
        <div>
        <input id='identification-input' 
        name='identification' 
        type='text' placeholder="please enter your email Id"
        onChange={change} value={initialVerificationId}>{initialVerificationId}</input>
        <button type="button" onClick={verifyAction}>Verify</button>
        </div>

    )
}