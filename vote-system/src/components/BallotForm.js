import React from 'react';
import "./BallotForm.css";

export const BallotForm = ({electionId,elections,showBallot}) => {
    return (
            <div style={{visibility: showBallot ? "visible" :"hidden"}}>
                {elections.map(election=>{
                    if(election.id===electionId)
                    {
                            election.question.map(q=>{
                                return(
                                    <div key={electionId + q.id}>
                                    <label>{q.question}</label>
                                    <input type="checkbox"/>
                                    </div>
                                )
                            
                            }) 
                    }})}
                    </div>
                     )
                }

