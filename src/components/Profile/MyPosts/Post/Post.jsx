import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

  return (
    <div className={s.item}>
      <img src='https://sun9-16.userapi.com/8VcdM9Q1Q_RrG48vtj9d4-IR2RxA8sLQYyxHmA/4jOTXd5Pasg.jpg' />
      {props.message}
      <div>
        <span>Like</span> {props.kolvLike}
      </div>

    </div>
  )
};

export default Post;