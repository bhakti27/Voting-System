import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { Layout } from './components/Layout';

ReactDOM.render(
  <Router>
    <Layout>
      <header id="page-header">
        <h1>BNC Connectors - No Reason, not to vote!</h1>
      </header>
      <nav id="menu">
        <ul>
          <li><Link to="/">Home</Link></li>
          {/* <li><Link to="/color-tool">Color Tool</Link></li>
          <li><Link to="/car-tool">Car Tool</Link></li>
          <li><Link to="/calc-tool">Calc Tool</Link></li> */}
        </ul>
      </nav>
      <main id="content">
        <Switch>
          <Route path="/" exact>
            <div>Home</div>
          </Route>
          {/* <Route path="/color-tool">
            <Provider store={colorToolStore}>
              <ColorToolContainer />
            </Provider>
          </Route>
          <Route path="/car-tool">
            <Provider store={carToolStore}>
              <CarToolContainer />
            </Provider>
          </Route>
          <Route path="/calc-tool">
            <Provider store={calcToolStore}>
              <CalcToolContainer />
            </Provider>
          </Route> */}
        </Switch>
      </main>
      <footer id="page-footer">
        <small>BNC Connectors, Inc.</small>
      </footer>
    </Layout>
  </Router>,
  document.querySelector('#root'),
);
