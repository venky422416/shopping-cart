import React, { Component } from 'react';
import AppMenu from './Components/Layout/AppMenu';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Cart from './Components/Cart';
import Mobiles from './Components/Mobiles';
import Laptops from './Components/Laptops';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <AppMenu />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/mobiles" component={Mobiles} />
            <Route exact path="/laptops" component={Laptops} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
}
