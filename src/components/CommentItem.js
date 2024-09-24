import React, { useState } from "react";
import video from "../data/video.js";

function CommentItem({ id, user, comment }) {


  return (
    <div>
      <h3>{user}</h3>
      <p>{comment}</p>
    </div>
  );
}

export default CommentItem;


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
