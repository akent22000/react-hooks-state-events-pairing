import React, { useState } from "react";
import video from "../data/video.js";
import CommentItem from "./CommentItem";

function Content({ video, comments }) {
  const [countUpvotes, setUpvotesCount] = useState(video.upvotes)
  const [countDownvotes, setDownvotesCount] = useState(video.downvotes)


  function handleUpvotesClick() {
    setUpvotesCount(countUpvotes + 1)
  }

  function handleDownvotesClick() {
    setDownvotesCount(countDownvotes - 1)
  }

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
        <button onClick={handleUpvotesClick}>{countUpvotes}👍</button>
        <button onClick={handleDownvotesClick}>{countDownvotes}👎</button>
      </div>


      <div>
        {/* <h2>Comments {comments.length}</h2> */}
        <button onClick={toggleComment}>
          {showComment ? 'Hide Text' : 'Show Text'}
        </button>
        {showComment && <div><h2>Comments {comments.length}</h2> <p>{commentElements}</p></div>}
      </div>

      {/* 
      <h2>Comments {comments.length}</h2>
      <div id="comments-list">{commentElements}</div> */}
    </div>

  );
}

export default Content;


// const video = {
//   id: 1,
//   title: "React Today and Tomorrow and 90% Cleaner React With Hooks",
//   embedUrl: "https://www.youtube.com/embed/dpw9EHDh2bM",
//   views: 730707,
//   createdAt: "Oct 26, 2018",
//   upvotes: 9210,
//   downvotes: 185,
//   comments: [
//     {
//       id: 1,
//       user: "duanebot",
//       comment: "first!",
//     },
//     {
//       id: 2,
//       user: "gaeron",
//       comment: "What a great tutorial!",
//     },
//   ],
// };
