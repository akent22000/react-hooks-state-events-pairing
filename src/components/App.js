import React, { useState } from "react";
import video from "../data/video.js";
import Content from "./Content.js";
import CommentItem from "./CommentItem";

function App() {
  console.log("Here's your data:", video);

  const [showComment, setComment] = useState(true);

  const toggleComment = () => {
    setComment(!showComment);
  };

  return (
    <div className="App">

      <Content
        video={video}
        comments={video.comments}
      />
    </div>
  );
}

export default App;
