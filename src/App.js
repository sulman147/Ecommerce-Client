import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Pages or Component
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Home from "./pages/Home";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Header from "./components/nav/Header";
import RegisterComplete from "./pages/auth/RegisterComplete";
import History from "./pages/user/History";
import Password from "./pages/user/Password";
import Wishlist from "./pages/user/Wishlist";
import AdminDashboard from "./pages/admin/AdminDashboard";
import UserRoute from "./components/routes/UserRoute";
import AdminRoute from "./components/routes/AdminRoute";
import CategoryCreate from "./pages/admin/category/CategoryCreate";
import CategoryUpdate from "./pages/admin/category/CategoryUpdate";

import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { currentUser } from "./functions/auth";

function App() {
  const dispatch = useDispatch();

  //to check firebase auth state
  useEffect(() => {
    const unsubcribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const idTokenResult = await user.getIdTokenResult();
        console.log("user", user);
        currentUser(idTokenResult.token)
          .then((res) => {
            dispatch({
              type: "LOGGED_IN_USER",
              payload: {
                name: res.data.name,
                email: res.data.email,
                token: idTokenResult.token,
                role: res.data.role,
                _id: res.data._id,
              },
            });
          })
          .catch((err) => console.log(err));
      }
    });
    return () => unsubcribe();
  }, [dispatch]);

  return (
    <>
      <Header />
      <ToastContainer />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Register} exact />
        <Route path="/Register/complete" component={RegisterComplete} exact />
        <Route path="/forgot/password" component={ForgotPassword} exact />
        <UserRoute path="/user/history" component={History} exact />
        <UserRoute path="/user/Password" component={Password} exact />
        <UserRoute path="/user/Wishlist" component={Wishlist} exact />
        <AdminRoute path="/admin/dashboard" component={AdminDashboard} exact />
        <AdminRoute path="/admin/category" component={CategoryCreate} exact />
        <AdminRoute
          path="/admin/category/:slug"
          component={CategoryUpdate}
          exact
        />
      </Switch>
    </>
  );
}

export default App;
