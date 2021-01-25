import React, { useState } from "react";
import "../../css/components/models/CreatePost.scss";
import "../../css/Register.scss";
import BASE_URL from "../../helpers/BASE_URL";
import { toast } from "react-toastify";

function CreatePost() {
  const [titleError, setTitleError] = useState("");
  const [postError, setPostError] = useState("");
  const closePostModel = () => {
    document.getElementById("register-outer").style.display = "none";
  };

  const submitPost = (e) => {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const body = document.getElementById("body").value;
    if (title.length < 6) {
      setTitleError("Title must be at least 6 chacters Long");
    }

    if (body.length < 12) {
      setPostError("Post must be at least 12 chacters Long");
    }

    if (title.length > 6 && body.length > 12) {
      setTitleError("");
      setPostError("");
      console.log(title);
      fetch(`${BASE_URL}/post/create/`, {
        method: "POST",
        body: JSON.stringify({
          title: document.getElementById("title").value,
          body: document.getElementById("body").value,
        }),
        headers: {
          loginToken: localStorage.getItem("loginToken"),
          "Content-Type": "application/json",
        },
      }).then((res) =>
        res
          .json()
          .then((data) => {
            if (data.success) {
              toast.success("Post Added");
            } else {
              toast.error("Error");
            }
          })
          .catch((err) => {
            console.log(err);
          })
      );
    }
  };
  return (
    <div>
      <div
        id="post-model"
        className="modal"
        id="register-outer"
        style={{ background: "rgba(0, 0, 0, 0.4)", display: "none" }}
      >
        <div className="modal-content">
          <div className="modal-header">
            <span className="close" onClick={closePostModel}>
              &times;
            </span>
            <h2>Create Post</h2>
          </div>
          <div className="modal-body" id="register">
            <form id="register-form">
              <span className="error">{titleError}</span>
              <textarea id="title" placeholder="Enter Post title" />

              <span className="error">{postError}</span>
              <textarea
                style={{ height: "100px" }}
                placeholder="Type you Post"
                id="body"
              />

              <button className="btn add-to-cart" onClick={submitPost}>
                Create Post
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
