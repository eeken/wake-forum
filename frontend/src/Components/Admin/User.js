import React, { useEffect, useState } from "react";
import BASE_URL from "../../helpers/BASE_URL";

function User() {
  useEffect(() => {}, []);
  const [user, setUser] = useState({});
  const getUserByEmail = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    fetch(`${BASE_URL}/user/getByEmail/${email}`).then((res) => {
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
    fetch(`${BASE_URL}/user/delete/`, {
      method: "POST",
      body: JSON.stringify({
        id: user.id,
      }),
      headers: {
        id: "jajajj", 
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
      <h3>Get user By Email</h3>
      <form id="admin-form">
        <input type="email" placeholder="Enter User Email" id="email" />
        <button onClick={getUserByEmail}>GET</button>
      </form>
      {user.id ? (
        <>
          <h3>User Info</h3>
          <div className="admin-active">
            id : <span>{user.id}</span>
          </div>
          <div className="admin-active">
            Nmae : <span>{user.name}</span>
          </div>
          <div className="admin-active">
            Email : <span>{user.email}</span>
          </div>
          <button id="button" onClick={deleteUser}>
            Delete User
          </button>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default User;
