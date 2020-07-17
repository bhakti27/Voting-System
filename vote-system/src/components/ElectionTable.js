import React from 'react';

import { electionsPropTypes } from '../propTypes/elections';
import { ElectionViewRow } from './ElectionViewRow';

export const ElectionTable = ({ elections }) => {


  const viewElectionResults = (electionId) =>{
    console.log("View election=" + electionId);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {!elections.length
          ? <tr><td colSpan="6">There are no elections.</td></tr>
          : elections.map(election => 
                <ElectionViewRow key={election.id} election={election}
                  onViewElectionResults={viewElectionResults} />)}
      </tbody>
    </table>
  );

};

ElectionTable.defaultProps = {
  elections: [],
};

ElectionTable.propTypes = {
  elections: electionsPropTypes,
};

// import { electionsPropTypes } from '../propTypes/elections';

// export const ElectionTable = ({
//   elections,
//   onViewResults: viewResults,
//   onAddElection: addElection,
// }) => {

//   return (
//     <>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>Favorite pasttimes</td>
//             <td>
//               <button onClick={() => { }}>Results</button>
//             </td>
//           </tr>
//           <tr>
//             <td>Favorite musical groups</td>
//             <td>
//               <button onClick={() => { }}>Results</button>
//             </td>
//           </tr>

//            {/* {!elections.length
//           ? <tr><td colSpan="6">There are no elections.</td></tr>
//           : elections.map(election => 
//             <tr>
//             <td>{election.id}</td>
//             <td className="text">{election.name}</td>
//             <td>
//               <button type="button"
//                 onClick={() => onEditCar(car.id)}>Edit</button>
//             </td>
//           </tr>)}  */}
//         </tbody>
//       </table>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>Favorite pasttimes</td>
//             <td>
//               <button onClick={() => { }}>Vote</button>
//             </td>
//           </tr>
//           <tr>
//             <td>Favorite musical groups</td>
//             <td>
//               <button onClick={() => { }}>Vote</button>
//             </td>
//           </tr>

//            {/* {!elections.length
//           ? <tr><td colSpan="6">There are no elections.</td></tr>
//           : elections.map(election => 
//             <tr>
//             <td>{election.id}</td>
//             <td className="text">{election.name}</td>
//             <td>
//               <button type="button"
//                 onClick={() => onEditCar(car.id)}>Edit</button>
//             </td>
//           </tr>)}  */}
//         </tbody>
//       </table>
//       <button type="button" onClick={() => addElection()}>Add</button>
//       {/* <button type="button" onClick={() => refreshCars()}>Refresh</button>  */}
//     </>
//   );

// };

// ElectionTable.defaultProps = {
//   elections: [],
// };

// ElectionTable.propTypes = {
// //  elections: electionsPropTypes,
// };