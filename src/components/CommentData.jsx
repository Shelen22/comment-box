import React from 'react';
import { datas } from "./data.js"
import Comment from './Comment';


const CommentData = () => {
  return (
    <div>
          <Comment key = {datas.id}  comments = {datas} />
    </div>
  )
}

export default CommentData