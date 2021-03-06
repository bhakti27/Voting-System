import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { VoterRegistrationContainer } from './containers/VoterRegistrationContainer';
import { Layout } from './components/Layout';
import {votingSystemStore} from './stores/VotingSystemStore';
import {VotingSystemContainer} from './containers/VotingSystemContainer';

ReactDOM.render(
  <Router>
    <Layout>
      <header id="page-header">
        <h1><img src="./images/BNC-Connector-Mascot.jpg" alt=""></img>BNC Connectors</h1>
        <h3> - No Reason, not to vote!</h3>
      </header>
      <nav id="menu">
        <ul>
          <li><Link to="/"> Home</Link></li>
          <li><Link to="/elections"> Elections</Link></li>
          <li><Link to="/voters"> Register To Vote</Link></li>
          <li><Link to="/vote"> Vote</Link></li>
        </ul>
      </nav>
      <main id="content">
        <Switch>
          <Route path="/" exact>
            <p></p>
            <div>Ready to Vote, Follow three simple steps</div>
            <h3><a href="/voters">Register To vote </a></h3>
            <h3><a href="/elections">Fill the Ballot</a></h3>
            <h3><a href="/vote">Vote</a></h3>
          </Route>
          <Route path="/elections">
            <Provider store={votingSystemStore} >
              <VotingSystemContainer/>
            </Provider>
          </Route>
          <Route path="/voters">
            <Provider store={votingSystemStore}>
              <VoterRegistrationContainer />
            </Provider>
          </Route>
          <Route path="/vote">
            <Provider>
              Vote
            </Provider>
          </Route>
        </Switch>
      </main>
      <footer id="page-footer">
        <small>BNC Connectors, Inc.</small>
      </footer>
    </Layout>
  </Router>,
  document.querySelector('#root'),
);
