import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/Register.scss";
import submitForm from "./helpers/submitForm";

function Register({ history }) {
  const [name, setName] = useState("");
  const [emal, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const [errors, setErrors] = useState(null);

  const updateFormValue = (field, value) => {
    switch (field) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;

      case "pwd":
        setPwd(value);
        break;

      default:
        break;
    }
  };

  const sendForm = async (e) => {
    e.preventDefault();
    const respnse = await submitForm("register", {
      name: name,
      email: emal,
      pwd: pwd,
    });
    if (!respnse.success) {
      let errorObject = {};
      respnse.error.details.map((error) => {
        errorObject[error.context.label] = error.message;
      });
      setErrors(errorObject);
    } else {
      setErrors(null);
      localStorage.setItem("loginToken", respnse.loginToken);
      history.push("/");
      window.location.reload();
    }
  };
  return (
    <div id="register-outer">
      <h1>Forum</h1>
      <div id="register">
        <h2>Create account</h2>
        <form id="register-form">
          <label for="name">Your Name</label>
          <span className="error">{errors?.name}</span>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => {
              updateFormValue("name", e.target.value);
            }}
          />

          <label for="email">Email</label>
          <span className="error">{errors?.email}</span>
          <input
            type="email"
            id="email"
            value={emal}
            onChange={(e) => {
              updateFormValue("email", e.target.value);
            }}
          />

          <label for="pwd">Password</label>
          <span className="error">{errors?.pwd}</span>
          <input
            type="password"
            id="pwd"
            value={pwd}
            onChange={(e) => {
              updateFormValue("pwd", e.target.value);
            }}
          />

          <button className="btn add-to-cart" onClick={sendForm}>
            Create your Account
          </button>
        </form>

        <span id="alreay-member">
          Already have an account?{" "}
          <Link className="link" to="/login">
            Sign-In
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Register;
