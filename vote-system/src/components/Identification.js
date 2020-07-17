import React, { useState } from 'react';
import "./Identification.css";
export const Identification = ({ voters, chageVisiblityOfBallot,
    changeVisibilityOfError,isBallotVisible}) => {

    const [identificationId, setIdentificationId] = useState('');

    const verifyAction = () => {
        setIdentificationId('');
        voters.forEach(voter => {
            
            if (voter.email === identificationId) {
                console.log(voter.email);
                chageVisiblityOfBallot(true);
                return;
            }
        })
        if(!isBallotVisible)
        {
            console.log("return");
            console.log(isBallotVisible);
            changeVisibilityOfError(true);
        }

    }
    const updateInputValue = (e) => {
        setIdentificationId(e.target.value);
    };

    return (
        <div className="identification">
            <input id='identification-input'
                name='identification'
                type='text' placeholder="please enter your email Id"
                onChange={updateInputValue} value={identificationId} />
            <button type="button" onClick={verifyAction}>Verify</button>
        </div>

    )
}