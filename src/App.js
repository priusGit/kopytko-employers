import React, { Component } from "react";
import { Switch, withRouter, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import MainPage from "./screens/MainPage/MainPage";
import HistoryPage from "./screens/HistoryPage/HistoryPage";
import ReservationsPage from "./screens/ReservationsPage/ReservationsPage";
import LogInPage from "./screens/LogInPage/LogInPage";
import MessagesPage from "./screens/MessagesPage/MessagesPage";
import OrdersPage from "./screens/OrdersPage/OrdersPage";
class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/history" exact component={HistoryPage} />
        <Route path="/reservations" exact component={ReservationsPage} />
        <Route path="/logInPage" exact component={LogInPage} />
        <Route path="/messages" exact component={MessagesPage} />
        <Route path="/orders" exact component={OrdersPage} />
      </Switch>
    );
    return <Layout>{routes}</Layout>;
  }
}
export default withRouter(App);
