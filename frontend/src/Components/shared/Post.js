import React from "react";
import "../../css/components/shared/Post.scss";
import { Link } from "react-router-dom";

function Post({ id, title, body, isLink = true, type }) {
  return (
    <div className="post-container">
      {isLink ? (
        <Link to={`/post/${id}`}>
          <h1 className="post-hadding">{title}</h1>
          <p className="post-body">{body}</p>
        </Link>
      ) : (
        <>
          <h1 className="post-hadding">{title}</h1>
          <p
            className="post-body"
            style={{ overflow: type == "comment" ? "visible" : "hidden" }}
          >
            {body}
          </p>
        </>
      )}
    </div>
  );
}

export default Post;
