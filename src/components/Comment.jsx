import React, { useState } from "react";

const Comment = ({ comments }) => {
//   console.log('comments:', comments.replies)
  const [extend, setExtend] = useState(false);
   
  
  if(comments.replies) {
   return  ( <div>
      <ul>
        <div>
          <li>{comments.author}</li>
          <li>{comments.timestamp}</li>
        </div>
        <li>{comments.body}</li>
        <button onClick={() => setExtend(!extend)}>Show Replies</button>
        {extend ? (
            <>
              {comments.replies.map((el) => {
                return <Comment key={el.id} comments={el} />;
              })}
            </>
          ) : null}
      </ul>
    </div>)
  }

  return (
    <div>
      <ul >
        <div>
          <li>{comments.author}</li>
          <li>{comments.timestamp}</li>
        </div>
        <li>{comments.body}</li>
      </ul>
    </div>
  );
};

export default Comment;
