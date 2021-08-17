import React from 'react';
import ReactDOM from 'react-dom';
import { Home } from './components'; //NEW_ADDITION
import reportWebVitals from './reportWebVitals';
import './styles.css'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';



ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>

        <Route exact path='/'>
          <Home title={'Drones Inventory'}/>
        </Route>

        <Route path='/dashboard'>
          <Dashboard></Dashboard>
        </Route>

        <Route path='/signin'>
          <SignIn></SignIn>
        </Route>

      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);