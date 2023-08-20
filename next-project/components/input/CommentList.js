'use client';
import classes from './CommentList.module.css';
import { useState, useEffect } from 'react';


const CommentList = (props) => {

  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    
      fetch('/api')
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
        setLoading(true);
      })
    
  },[])
  if(!loading || !comments){
    return(<div><h1>dddd</h1></div>);
  }
  return (
    <ul className={classes.comments}>
        <li>d?</li>
       {comments.map((item)=>(
        <li key={item.email}>{item.text}</li>
       ))}
    </ul>
  );
}

export default CommentList;