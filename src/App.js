import React from "react";
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Home from "./pages/Home";
import Header from "./components/nav/Header";
import RegisterComplete from "./pages/auth/RegisterComplete";

function App() {
  return (
    <>
      <Header />
      <ToastContainer />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/register" component={Register} exact={true} />
        <Route
          path="/Register/complete"
          component={RegisterComplete}
          exact={true}
        />
        <Route path="/login" component={Login} exact={true} />
      </Switch>
    </>
  );
}

export default App;
