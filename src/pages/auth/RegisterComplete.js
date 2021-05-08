import React, { useState, useEffect } from "react";
import { auth } from "../../firebase";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
// import axios from "axios";
import { createOrUpdateUser } from "../../functions/auth";

const RegisterComplete = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let dispatch = useDispatch();
  // const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    setEmail(window.localStorage.getItem("emailForRegistration"));
  }, [history]);
  // props.history

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Email and Password is required");
      return;
    }
    if (password.length < 6) {
      toast.error("password must be aat least 6 Character long");
      return;
    }
    try {
      const result = await auth.signInWithEmailLink(
        email,
        window.location.herf
      );
      if (result.user.emailVerified) {
        window.localStorage.removeItem("emailForRegistration");
        let user = auth.currentUser;
        await user.updatePassword(password);
        const idTokenResult = await user.getIdTokenResult();
        console.log("user", user, "idTokenResult", idTokenResult);
        //redux Store

        createOrUpdateUser(idTokenResult.token)
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
        history.push("/");
      }
      console.log("Result", result);
    } catch (error) {
      toast.error(error.message);
    }
  };
  const CompleteRegisterForm = () => (
    <form onSubmit={handleSubmit}>
      <input type="email" className="form-control" value={email} disabled />
      <br />
      <input
        type="password"
        className="form-control"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        autoFocus
        placeholder="Password"
      />
      <br />
      <button type="submit" className="btn btn-raised">
        Complete Registertion
      </button>
    </form>
  );
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>Register Complete</h4>
          {CompleteRegisterForm()}
        </div>
      </div>
    </div>
  );
};
export default RegisterComplete;
