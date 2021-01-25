import React, { useState, useEffect } from "react";
import Forum from "./Components/shared/Forum";
import Post from "./Components/shared/Post";
import "./css/Home.scss";
import BASE_URL from "./helpers/BASE_URL";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/post/`).then((res) => {
      res
        .json()
        .then((data) => {
          setPosts(data);
        })
        .catch((err) => {
          console.log(err);
        });
    });

    fetch(`${BASE_URL}/post/`).then((res) => {
      res
        .json()
        .then((data) => {
          setPosts(data);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }, []);

  return (
    <div id="home">
      <div id="left">
        {posts.map(({ title, id, body }) => {
          return <Post title={title} id={id} body={body} key={id} />;
        })}
      </div>
      <div id="right">
        <h3>Most Popular Posts</h3>
        {posts.map(({ id, title }) => {
          return <Forum id={id} title={title} key={id} />;
        })}
      </div>
    </div>
  );
}

export default Home;
