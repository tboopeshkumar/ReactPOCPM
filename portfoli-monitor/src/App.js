import React, { Component } from 'react';
//import logo from './logo.svg';
//import 'App.css';
import DrillDownMenu from './ddmenu/drilldownmenu'
import ProfitLoss from './profitloss/profitlosscomponent'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <Router>
      <div >
        <div >
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h2>Portfolio Monitor</h2>
        </div>
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <DrillDownMenu></DrillDownMenu>
        <Route path="/products/list"
                component={ProfitLoss}  >
            </Route>
         
      </div>
      </Router>
    );
  }
}

export default App;
