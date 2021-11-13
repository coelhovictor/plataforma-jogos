import React, {Component} from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import Home from './pages';
import NotFound from './pages/404';
import Repeticao from './pages/repeticao';
import TicTacToe from './pages/tictactoe';
import Snake from './pages/snake';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/repeticao" component={Repeticao}/>
          <Route path="/tictactoe" component={TicTacToe}/>
          <Route path="/snake" component={Snake}/>
          <Route component={NotFound}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
