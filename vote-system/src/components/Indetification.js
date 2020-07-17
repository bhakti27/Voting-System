import React from 'react';

export const Identification = (props) => {
    const verifyAction = (e)=>{
        //console.log(statePrpops);
        return (
            <h1> Not Possible to connect</h1>
        )
    }
    return(
        <div>
        <label>Enter your email Id</label>
        <input type="text" placeholder="please enter your email Id"></input>
        <button type="button" onClick={verifyAction}>Verify</button>
        </div>

    )
}