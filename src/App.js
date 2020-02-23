import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from "../src/components/Appbar/index";
import Footer from "../src/components/Footer";
import ListBranches from "./pages/Branch/List";
import ListVehicles from "./pages/Vehicles/List";
import ListUsers from "./pages/Users/List";
import Login from "./pages/Login";
import ProtectedRoute from './ProtectedRoute';
import Home from "./pages/Home/Home";
import EditNewBranch from "./pages/Branch/EditNew";
import EditNewVehicle from "./pages/Vehicles/EditNew";
import EditNewUser from "./pages/Users/EditNew";

import StatusBar from './components/StatusBar/StatusBar';
import ReservatiomFilter from "./pages/Reservation/ReservatiomFilter";


const App = () => {

  const [dialog, setDialog] = useState({ show: false, type: "error", msg: "" });

  const renderStatus = (type, msg = "") => {
    setDialog({ show: true, type, msg });
  }

  const routes = [
    <Route path="/login" key={1} component={Login}></Route>,
    <ProtectedRoute path="/" exact key={2}
      component={() => <Home showStatus={renderStatus} />}></ProtectedRoute>,

    <ProtectedRoute path="/branches" exact key={3}
      component={() => <ListBranches showStatus={renderStatus} />}></ProtectedRoute>,

    <ProtectedRoute path="/branches/new" exact key={4}
      component={() => <EditNewBranch showStatus={renderStatus} />}></ProtectedRoute>,

    <ProtectedRoute path="/branches/:id" exact key={5}
      component={() => <EditNewBranch showStatus={renderStatus} />}></ProtectedRoute>,

    <ProtectedRoute path="/vehicles" exact key={6}
      component={() => <ListVehicles showStatus={renderStatus} />}></ProtectedRoute>,

    <ProtectedRoute path="/vehicles/new" exact key={7}
      component={() => <EditNewVehicle showStatus={renderStatus} />}></ProtectedRoute>,

    <ProtectedRoute path="/vehicles/:id" exact key={8}
      component={() => <EditNewVehicle showStatus={renderStatus} />}></ProtectedRoute>,

    <ProtectedRoute path="/users" exact key={9}
      component={() => <ListUsers showStatus={renderStatus} />}></ProtectedRoute>,

    <ProtectedRoute path="/users/new" exact key={10}
      component={() => <EditNewUser showStatus={renderStatus} />}></ProtectedRoute>,

    <ProtectedRoute path="/users/:id" exact key={11}
      component={() => <EditNewUser showStatus={renderStatus} />}></ProtectedRoute>,

    <ProtectedRoute path="/reservations" exact key={12}
      component={() => <ReservatiomFilter showStatus={renderStatus} />}></ProtectedRoute>,
  ];

  return (
    <Router>
      <Menu />
      <Switch>
        {routes}
      </Switch>
      <StatusBar type={dialog.type} msg={dialog.msg} propShow={dialog.show} closeRef={() => setDialog({ show: false, type: "error", msg: "" })} />
      <Footer />
    </Router >)
}

export default App;
