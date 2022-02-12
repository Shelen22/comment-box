import React, { useState } from "react";

const Comment = ({ comments }) => {
//   console.log('comments:', comments.replies)
  const [extend, setExtend] = useState(false);
   
  
  if(comments.replies) {
   return  ( <div>
      <ul>
        <div style= {{display: 'flex', gap :"5px"}}>
          <li>{comments.author}</li>
          <li>{comments.points + " points"}</li>
          <li>{comments.timestamp}</li>
        </div>
        <li style = {{fontWeight:"bold"}}>{comments.body}</li>
        <button onClick={() => setExtend(!extend)} style = {{border : "none", background :"white", color : "grey" , cursor : "pointer"}}>{!extend ? "Comments" : "Collaps" }</button>
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
        <div style= {{display: 'flex', gap :"5px"}}>
          <li>{comments.author}</li>
          <li>{comments.points + " points"}</li>
          <li>{comments.timestamp}</li>
        </div>
        <li style = {{fontWeight:"bold"}}>{comments.body}</li>
      </ul>
    </div>
  );
};

export default Comment;
