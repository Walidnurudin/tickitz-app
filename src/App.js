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
import Dashboard from "./pages/admin/Dashboard";
import ManageMovie from "./pages/admin/ManageMovie";
import ManageSchedule from "./pages/admin/ManageSchedule";
import Ticket from "./pages/main/Ticket";

import PrivateRoute from "./helpers/routes/PrivateRoute";
import PublicRoute from "./helpers/routes/PublicRoute";
import AdminRoute from "./helpers/routes/AdminRoute";

// TES REDUX
import CounterClass from "./pages/basic/Counter/counter.class";
import CounterFunc from "./pages/basic/Counter/counter.functional";
import CounterFuncHooks from "./pages/basic/Counter/counter.func.hooks";

// REDUX
import { Provider } from "react-redux";
import { store, persistor } from "./stores/store";
import { PersistGate } from "redux-persist/integration/react";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <PersistGate persistor={persistor}>
            <Switch>
              {/* BASIC */}
              <PrivateRoute path="/basic-home" exact component={BasicHome} />

              <PublicRoute path="/basic-login" restricted={true} exact component={BasicLogin} />
              <PublicRoute path="/basic-react" exact component={BasicReact} />
              <PublicRoute path="/basic-counter-class" exact component={CounterClass} />
              <PublicRoute path="/basic-counter-func" exact component={CounterFunc} />
              <PublicRoute path="/basic-counter-func-hooks" exact component={CounterFuncHooks} />

              {/* <Route path="/basic-react" exact component={BasicReact} /> */}
              {/* <Route path="/basic-login" exact component={BasicLogin} /> */}
              {/* <Route path="/basic-home" exact component={BasicHome} /> */}
              <Route path="/basic-detail/:movieId" exact component={BasicMovieDetail} />

              {/* PROJECT */}
              <PublicRoute path="/login" restricted={true} exact component={Login} />

              {/* user */}
              <PrivateRoute path="/" exact component={Home} />
              <PrivateRoute path="/movie-detail/:id" exact component={MovieDetail} />
              <PrivateRoute path="/order" exact component={Order} />
              <PrivateRoute path="/payment" exact component={Payment} />
              <PrivateRoute path="/profile" exact component={Profile} />
              <PrivateRoute path="/ticket" exact component={Ticket} />

              {/* admin */}
              <AdminRoute path="/dashboard" exact component={Dashboard} />
              <AdminRoute path="/manage-movie" exact component={ManageMovie} />
              <AdminRoute path="/manage-schedule" exact component={ManageSchedule} />
            </Switch>
          </PersistGate>
        </Router>
      </Provider>
    );
  }
}

export default App;
