import React, { useEffect, useState } from "react";
import Forum from "./Components/shared/Forum";
import "./css/Post.scss";
import P from "./Components/shared/Post";
import CommentForm from "./Components/Post/CommentForm";
import BASE_URL from "./helpers/BASE_URL";

function Post({ match }) {
  const postId = match.params.id;
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/post/${postId}`).then((res) => {
      res
        .json()
        .then((data) => {
          setPost(data);
        })
        .catch((err) => {
          console.log(err);
        });
    });

    fetch(`${BASE_URL}/comment/${postId}`).then((res) => {
      res
        .json()
        .then((data) => {
          setComments(data);
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }, []);
  return (
    <div id="home">
      <div id="left" style={{ width: "100%" }}>
        <h1
          className="post-hadding-detail link"
          style={{ marginBottom: "15px" }}
        >
          {post?.title}
        </h1>
        <p className="post-body">{post?.body}</p>
        {/* <button id="post-comment">Post Comment</button> */}
        <CommentForm postId={post?.id} />
        <h3 id="reply-hadding">All Replies</h3>
        {comments.map(({ id, comment, name }) => {
          return (
            <P
              key={id}
              title={name}
              body={comment}
              isLink={false}
              type="comment"
            />
          );
        })}
      </div>
    </div>
  );
}

export default Post;
