import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import BasicReact from "./pages/basic/React";
import BasicLogin from "./pages/basic/Login";
import BasicHome from "./pages/basic/Home";
import BasicMovieDetail from "./pages/basic/DetailMovie";

import Login from "./pages/auth/Login";
import Home from "./pages/main/Home";
import MovieDetail from "./pages/main/MovieDetail";
import Order from "./pages/main/Order";
import Payment from "./pages/main/Payment";
import Profile from "./pages/main/Profile";

import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <Router>
        {/* <Navbar /> */}

        <Switch>
          {/* BASIC */}
          <Route path="/basic-react" exact component={BasicReact} />
          <Route path="/basic-login" exact component={BasicLogin} />
          <Route path="/basic-home" exact component={BasicHome} />
          <Route path="/basic-detail/:movieId" exact component={BasicMovieDetail} />

          {/* PROJECT */}
          <Route path="/login" exact component={Login} />
          <Route path="/" exact component={Home} />
          <Route path="/movie-detail/:id" exact component={MovieDetail} />
          <Route path="/order" exact component={Order} />
          <Route path="/payment" exact component={Payment} />
          <Route path="/profile" exact component={Profile} />
        </Switch>
      </Router>
    );
  }
}

export default App;
