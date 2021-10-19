import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import BasicReact from "./pages/basic/React";
import Login from "./pages/auth/Login";
import Home from "./pages/main/Home";
import MovieDetail from "./pages/main/MovieDetail";
import Order from "./pages/main/Order";
import Payment from "./pages/main/Payment";

import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />

        <Switch>
          <Route path="/basic-react" exact component={BasicReact} />

          <Route path="/login" exact component={Login} />
          <Route path="/" exact component={Home} />
          <Route path="/movie-detail" exact component={MovieDetail} />
          <Route path="/order" exact component={Order} />
          <Route path="/payment" exact component={Payment} />
        </Switch>
      </Router>
    );
  }
}

export default App;
