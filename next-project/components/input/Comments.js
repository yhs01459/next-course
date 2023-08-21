'use client';
import { useEffect, useState } from 'react';

import CommentList from './CommentList';
import NewComment from './NewComment';
import classes from './Comments.module.css';

const Comments = (props) => {
  const eventId = props.eventId;
  

  const [showComments, setShowComments] = useState(false);

  const toggleCommentsHandler = () => {
    if(showComments){
      setShowComments(false)
    }
    else{
      setShowComments(true);
    }
  }

  function addCommentHandler(commentData) {
    
    fetch(`/api/${eventId}`, {
      method:'POST',
      body:JSON.stringify(commentData),
    })
    .then((res)=>res.json())
    .then((data)=>console.log(data));
  }


  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList />}
    </section>
  );
}

export default Comments;