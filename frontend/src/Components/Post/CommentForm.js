import React from "react";
import "../../css/components/Post/PostComment.scss";
import BASE_URL from "../../helpers/BASE_URL";
import { useStateValue } from "../../StateProvider";

function CommentForm({ postId }) {
  const [{ user }] = useStateValue();
  const publishComment = (e) => {
    e.preventDefault();
    if (!user) {
      window.history.pushState("login", "LOgin page ", "/login");
      window.location.reload();
    } else {
      const comment = document.getElementById("comment").value;

      console.log(comment);
      fetch(`${BASE_URL}/comment/`, {
        method: "POST",
        body: JSON.stringify({
          postId: postId,
          comment: comment,
        }),
        headers: {
          loginToken: localStorage.getItem("loginToken"),
          "Content-Type": "application/json",
        },
      }).then((res) =>
        res
          .json()
          .then((data) => {
            console.log(data);
          })
          .catch((err) => {
            console.log(err);
          })
      );
    }
  };
  return (
    <div id="comment-form">
      <form>
        <input type="text" placeholder="Type you comment" id="comment" />
        <button id="submitQuery" onClick={publishComment}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default CommentForm;
