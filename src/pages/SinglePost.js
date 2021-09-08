import React from "react";
import { Link } from "react-router-dom";

const SinglePost = ({ match, posts }) => {
  const id = parseInt(match.params.id);
  const post = posts.find((post) => post.id === id);

  //////////////////////
  // Styles
  /////////////////////
  const div = {
    textAlign: "center",
    border: "3px solid green",
    width: "80%",
    margin: "30px auto",
  };

  return (
    <div style={div}>
      <h1>{post.subject}</h1>
      <h2>{post.details}</h2>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default SinglePost;