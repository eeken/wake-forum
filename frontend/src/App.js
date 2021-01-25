import React, { useEffect } from "react";
import Hero from "./Components/shared/Hero";
import NavBar from "./Components/shared/NavBar";
import "./App.css";
import Home from "./Home";
import Post from "./Post.js";
import Register from "./Register";
import Admin from "./Admin";
import { useStateValue } from "./StateProvider";
import BASE_URL from "./helpers/BASE_URL";

import { Switch, Route } from "react-router-dom";
import Login from "./Login";
import Moderator from "./Moderator";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from "./About";
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    if (localStorage.getItem("loginToken")) {
      fetch(`${BASE_URL}/user/getUserInfo/`, {
        method: "GET",

        headers: {
          loginToken: localStorage.getItem("loginToken"),
        },
      }).then((res) =>
        res
          .json()
          .then((data) => {
            if (data.success) {
              dispatch({
                type: "SET_USER_INFO",
                value: data,
              });
            }
          })
          .catch((err) => {
            console.log(err);
          })
      );
    }
  }, []);
  return (
    <>
      <ToastContainer />
      <div className="header">
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route path="/admin" component={Admin} />
          <Route path="/moderator" component={Moderator} />
          <Route path="*">
            <NavBar />
            <Hero />
          </Route>
        </Switch>
      </div>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/post/:id" component={Post} />
      </Switch>
    </>
  );
}

export default App;
