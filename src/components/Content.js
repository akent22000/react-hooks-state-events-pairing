import React, { useState } from "react";
import video from "../data/video.js";
import CommentItem from "./CommentItem";

function Content({ video, comments }) {
  const [countUpvotes, setUpvotesCount] = useState(video.upvotes)
  const [countDownvotes, setDownvotesCount] = useState(video.downvotes)
  const [showComment, setComment] = useState(true);

  const toggleComment = () => {
    setComment(!showComment);
  };

  const commentElements = comments.map((comment) => {
    return (
      <CommentItem key={comment.id} user={comment.user} comment={comment.comment} />
    )
  })

  return (
    <div class="ui card">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <div class="content">
        <h1>{video.title}</h1>
        <div class="description">
          <p>{video.views} Views | Uploaded {video.createdAt}
          </p>
        </div>
      </div>
      <div class="extra content">
        <button onClick={() => setUpvotesCount(countUpvotes + 1)}>{countUpvotes}👍</button>
        <button onClick={() => setDownvotesCount(countDownvotes - 1)}>{countDownvotes}👎</button>
      </div>
      <div>
        <button onClick={toggleComment}>
          {showComment ? 'Hide Text' : 'Show Text'}
        </button>
        {showComment && <div><h2>Comments {comments.length}</h2> <p>{commentElements}</p></div>}
      </div>
    </div>

  );
}

export default Content;
