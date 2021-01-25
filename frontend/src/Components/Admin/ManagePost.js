import React, { useEffect, useState } from "react";
import BASE_URL from "../../helpers/BASE_URL";

function ManagePost() {
  useEffect(() => {}, []);
  const [user, setUser] = useState({});
  const getUserByEmail = (e) => {
    e.preventDefault();
    const id = document.getElementById("id").value;
    fetch(`${BASE_URL}/post/${id}`).then((res) => {
      res
        .json()
        .then((data) => {
          setUser(data);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  const deleteUser = () => {
    fetch(`${BASE_URL}/post/delete/`, {
      method: "POST",
      body: JSON.stringify({
        id: user.id,
      }),
      headers: {
        id: "jajajj", //cahnge this
        "Content-Type": "application/json",
      },
    }).then((res) =>
      res
        .json()
        .then((data) => {
          setUser({});
        })
        .catch((err) => {
          console.log(err);
        })
    );
  };
  return (
    <div>
      <h3>Get Post By Id</h3>
      <form id="admin-form">
        <input type="text" placeholder="Enter Post id" id="id" />
        <button onClick={getUserByEmail}>GET</button>
      </form>
      {user.id ? (
        <>
          <h3>User Info</h3>
          <div className="admin-active">
            id : <span>{user.id}</span>
          </div>
          <div className="admin-active">
            Title : <span>{user.title}</span>
          </div>
          <div className="admin-active">
            Body : <span>{user.body}</span>
          </div>

          <button id="button" onClick={deleteUser}>
            Delete Post
          </button>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default ManagePost;
