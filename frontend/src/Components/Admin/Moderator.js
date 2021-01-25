import React from "react";
import BASE_URL from "../../helpers/BASE_URL";

function Moderator({ useranme, id, changeList }) {
  const deleteUser = () => {
    fetch(`${BASE_URL}/moderator/delete/`, {
      method: "POST",
      body: JSON.stringify({
        id: id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) =>
      res
        .json()
        .then((data) => {
          changeList(Math.random());
        })
        .catch((err) => {
          console.log(err);
        })
    );
  };
  return (
    <div id="moderator">
      <div className="admin-active">
        Username : <span>{useranme}</span>
      </div>

      <button id="button" onClick={deleteUser}>
        Delete This moderator
      </button>
    </div>
  );
}

export default Moderator;
