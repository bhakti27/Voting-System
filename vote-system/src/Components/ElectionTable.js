import React from 'react';

export const ElectionTable = electionList => {
    return (
    <table>
        <thead>
        <tr>
        Election Name
        </tr>
        </thead>
        <tbody>
        {!electionList.length
            ?<tr><td colSpan="6">There are no cars.</td></tr>
            : electionList.map(election=> <tr key={election.id}><td>{election.name}</td></tr>)
        }
        </tbody>
        </table>
        )
}