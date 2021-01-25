import React from "react";
import { Link } from "react-router-dom";
import "../../css/components/shared/Forum.scss";
function Forum({ title, id }) {
  return (
    <Link to={`/post/${id}`}>
      <div id="forum">
        <p className="link">{title}</p>
      </div>
    </Link>
  );
}

export default Forum;
