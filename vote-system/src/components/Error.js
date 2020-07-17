import React from 'react';


export const Error = ({showError}) => {
    return (
        <div style={{visibility: showError ? "visible" :"hidden"}}>
        <h1>You are not registered voter, please register first!</h1>
        </div>
    )
}