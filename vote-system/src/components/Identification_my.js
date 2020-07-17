import React, { useState } from 'react';
import "./Identification.css";
export const Identification = ({ elections, chageVisiblityOfBallot,
    resetShowBallot, changeVisibilityOfError, resetshowError }) => {

    const [identificationId, setIdentificationId] = useState(undefined);


    const verifyAction = () => {
        resetShowBallot();
        resetshowError();
        setIdentificationId(undefined);
        elections.forEach(election => {
            if (election.emailId === identificationId) {
                chageVisiblityOfBallot();
                return;
            }
        })

        changeVisibilityOfError();
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