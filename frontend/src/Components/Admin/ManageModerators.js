import React, { useState, useEffect } from "react";
import BASE_URL from "../../helpers/BASE_URL";
import Moderator from "./Moderator";

function ManageModerators() {
  const [listChanged, setListChanged] = useState(1);
  const [moderators, setModerators] = useState([]);
  useEffect(() => {
    fetch(`${BASE_URL}/moderator/`).then((res) =>
      res
        .json()
        .then((data) => {
          setModerators(data);
        })
        .catch((err) => {
          console.log(err);
        })
    );
  }, [listChanged]);
  const createModerator = (e) => {
    e.preventDefault();
    const useranme = document.getElementById("username").value;
    const pwd = document.getElementById("pwd").value;
    fetch(`${BASE_URL}/moderator/`, {
      method: "POST",
      body: JSON.stringify({
        useranme: useranme,
        pwd: pwd,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) =>
      res
        .json()
        .then((data) => {
          setListChanged(Math.random());
        })
        .catch((err) => {
          console.log(err);
        })
    );
  };
  return (
    <div>
      <form id="admin-form">
        <input
          type="text"
          placeholder="Enter Username"
          id="username"
          required
        />
        <br />
        <input type="password" placeholder="Enter Password" id="pwd" required />
        <br />

        <button onClick={createModerator}>Create Moderator</button>
      </form>
      <h3 style={{ marginBottom: "20px" }}>All Moderators</h3>
      {moderators.map(({ id, username }) => {
        return (
          <Moderator
            useranme={username}
            id={id}
            key={id}
            changeList={setListChanged}
          />
        );
      })}
    </div>
  );
}

export default ManageModerators;
