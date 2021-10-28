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
import OrderHistory from "./pages/main/OrderHistory";
import Dashboard from "./pages/admin/Dashboard";
import ManageMovie from "./pages/admin/ManageMovie";
import ManageSchedule from "./pages/admin/ManageSchedule";

import PrivateRoute from "./helpers/routes/PrivateRoute";
import PublicRoute from "./helpers/routes/PublicRoute";

// TES REDUX
import CounterClass from "./pages/basic/Counter/counter.class";
import CounterFunc from "./pages/basic/Counter/counter.functional";

// REDUX
import { Provider } from "react-redux";
import store from "./stores/store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            {/* BASIC */}
            <PrivateRoute path="/basic-home" exact component={BasicHome} />

            <PublicRoute path="/basic-login" restricted={true} exact component={BasicLogin} />
            <PublicRoute path="/basic-react" exact component={BasicReact} />
            <PublicRoute path="/basic-counter-class" exact component={CounterClass} />
            <PublicRoute path="/basic-counter-func" exact component={CounterFunc} />

            {/* <Route path="/basic-react" exact component={BasicReact} /> */}
            {/* <Route path="/basic-login" exact component={BasicLogin} /> */}
            {/* <Route path="/basic-home" exact component={BasicHome} /> */}
            <Route path="/basic-detail/:movieId" exact component={BasicMovieDetail} />

            {/* PROJECT */}
            <Route path="/login" exact component={Login} />
            <Route path="/" exact component={Home} />
            <Route path="/movie-detail/:id" exact component={MovieDetail} />
            <Route path="/order" exact component={Order} />
            <Route path="/payment" exact component={Payment} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/order-history" exact component={OrderHistory} />

            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/manage-movie" exact component={ManageMovie} />
            <Route path="/manage-schedule" exact component={ManageSchedule} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
