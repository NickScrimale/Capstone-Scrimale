import React from 'react';
import "./Post.css";
import { Link } from "react-router-dom";


export const PostCard = ({ post, handleDeletePost }) => {
  return (
    <div className="card">
      <div className="card-content">
         <h2 class="post__title">${content.title}</h2>
         <div class="post__tagline">${content.message}</div>
         <p>Posted by ${user.id} on ${content.postDate}</p>
        
        <button type="button" onClick={() => handleDeletePost(post.id)}>Delete post</button>
        <button type="button" onClick={() => handleEditPost(post.id)}>Edit post</button>
      </div>
    </div>
  );
}