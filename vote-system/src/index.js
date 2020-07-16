import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { voterRegistrationStore } from './stores/voterRegistrationStore';
import { Layout } from './Components/Layout'
import { VoterRegistrationContainer } from './containers/VoterRegistrationContainer';

ReactDOM.render(
  <Router>
    <Layout>
      <header id="page-header">
        <h1>BNC Connectors - No Reason, not to vote!</h1>
      </header>
      <nav id="menu">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/color-tool">Elections</Link></li>
          <li><Link to="/voters">Register To Vote</Link></li>
          <li><Link to="/calc-tool">Vote</Link></li>
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
          <Route path="/color-tool">
            <Provider >
              Elections
            </Provider>
          </Route>
          <Route path="/voters">
            <Provider store={voterRegistrationStore}>
              <VoterRegistrationContainer />
            </Provider>
          </Route>
          <Route path="/calc-tool">
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
