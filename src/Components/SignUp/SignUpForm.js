import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/UserContexts";
import "./SignUpForm.css";

const SignUpForm = () => {
  const [confirmuser, setconfirm] = useState("");
  const { createUser } = useContext(AuthContext);
  const Hundlesignupclick = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm_pass = form.confirm.value;
    if (password !== confirm_pass) {
      setconfirm("Password Didn't Match");
    }
    if (password.length < 4) {
      setconfirm("Password Must be 6 Charecters");
    }
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="form-container">
      <h2 className="form-title">Sign Up</h2>
      <form onSubmit={Hundlesignupclick}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" required />
        </div>
        <div className="form-control">
          <label htmlFor="confirm">Confirm Password</label>
          <input type="password" name="confirm" required />
        </div>
        <p>
          Already Have an Account <Link to="/signin">Login</Link>
        </p>
        <p>{confirmuser}</p>
        <input className="btn-submit" type="submit" value="Sign Up" />
      </form>
    </div>
  );
};

export default SignUpForm;
