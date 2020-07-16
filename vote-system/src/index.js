import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { Layout } from './Components/Layout';
import {votingSystemStore} from './stores/votingSystemStore';
import {VotingSystemContainer} from './containers/VotingSystemContainer';

ReactDOM.render(
  <Router>
    <Layout>
      <header id="page-header">
        <h1>BNC Connectors - No Reason, not to vote!</h1>
      </header>
      <nav id="menu">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/elections">Elections</Link></li>
          <li><Link to="/voters">Register To Vote</Link></li>
          <li><Link to="/vote">Vote</Link></li>
        </ul>
      </nav>
      <main id="content">
        <Switch>
          <Route path="/" exact>
            <div>Ready to Vote, Follow three simple steps</div>
            <h3>Register To vote </h3>
            <h3>Fill the Ballot</h3>
            <h3>Vote</h3>
          </Route>
          <Route path="/elections">
            <Provider store={votingSystemStore} >
              <VotingSystemContainer/>
            </Provider>
          </Route>
          <Route path="/voters">
            <Provider>
              Register Voters
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
