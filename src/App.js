import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import { Jumbotron } from 'react-bootstrap';

import logo from './logo.svg';
import './App.css';
import PersonalDetail from './components/PersonalDetail';
import KinDetail from './components/KinDetail';
import Upload from './components/Upload';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Jumbotron>
          <Switch>
            <Route path="/upload" component={Upload} />
            <Route path="/kin" component={KinDetail} />
            <Route path="/" component={PersonalDetail} />
          </Switch>
        </Jumbotron>
      </BrowserRouter>
    );
  }
}

export default App;
