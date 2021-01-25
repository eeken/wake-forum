import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/Register.scss";
import submitForm from "./helpers/submitForm";
import { useStateValue } from "./StateProvider";

function Login({ history, location }) {
  const [emal, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [{}, dispatch] = useStateValue();

  const [invalildCredentailsError, setInavldiCredientalsErr] = useState("");

  const updateFormValue = (field, value) => {
    switch (field) {
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

  const getFormTitle = () => {
    if (location.search == "?admin") {
      return "Admin Login";
    } else if (location.search == "?moderator") {
      return "Moderator Login";
    } else {
      return "Forum";
    }
  };

  const sendForm = async (e) => {
    e.preventDefault();

    if (location.search == "?admin") {
      const respnse = await submitForm("login", {
        username: emal,
        pwd: pwd,
        which: "admin",
      });

      if (!respnse.success) {
        setInavldiCredientalsErr("Inavlid Email or Password");
      } else {
        setInavldiCredientalsErr("");
        localStorage.setItem("loginToken", respnse.loginToken);
        const [quaerKey, queryValue] = location.search
          .replace("?", "")
          .split("=");
        if (quaerKey == "redirectTo") {
          history.push(queryValue);
          window.location.reload();
        } else {
          console.log(respnse.id);
          dispatch({
            type: "SET_ADMIN_ID",
            value: respnse.id,
          });
          history.push("/admin");
        }
      }
    } else if (location.search == "?moderator") {
      const respnse = await submitForm("login", {
        username: emal,
        pwd: pwd,
        which: "moderator",
      });

      if (!respnse.success) {
        setInavldiCredientalsErr("Inavlid Email or Password");
      } else {
        setInavldiCredientalsErr("");
        localStorage.setItem("loginToken", respnse.loginToken);
        const [quaerKey, queryValue] = location.search
          .replace("?", "")
          .split("=");
        if (quaerKey == "redirectTo") {
          history.push(queryValue);
          window.location.reload();
        } else {
          console.log(respnse.id);
          dispatch({
            type: "SET_MOD_ID",
            value: respnse.id,
          });
          history.push("/moderator");
        }
      }
    } else {
      const respnse = await submitForm("login", {
        email: emal,
        pwd: pwd,
      });
      if (!respnse.success) {
        setInavldiCredientalsErr("Inavlid Email or Password");
      } else {
        setInavldiCredientalsErr("");
        localStorage.setItem("loginToken", respnse.loginToken);
        const [quaerKey, queryValue] = location.search
          .replace("?", "")
          .split("=");
        if (quaerKey == "redirectTo") {
          history.push(queryValue);
          window.location.reload();
        } else {
          history.push("/");
          window.location.reload();
        }
      }
    }
  };
  return (
    <div id="register-outer">
      <h1>{getFormTitle()}</h1>
      <div id="register">
        <h2>Sign-In</h2>
        <form id="register-form">
          <span className="error">{invalildCredentailsError}</span>
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            onChange={(e) => {
              updateFormValue("email", e.target.value);
            }}
            value={emal}
          />

          <label for="pwd">Password</label>
          <input
            type="password"
            id="pwd"
            onChange={(e) => {
              updateFormValue("pwd", e.target.value);
            }}
            value={pwd}
          />

          <button className="btn add-to-cart" onClick={sendForm}>
            Sign-In
          </button>
        </form>

        {location.search ? (
          ""
        ) : (
          <span id="alreay-member">
            Dont have a account?{" "}
            <Link className="link" to="/register">
              register
            </Link>
          </span>
        )}
      </div>
    </div>
  );
}

export default Login;
