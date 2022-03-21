
import React, { useState, useEffect } from 'react';
import { PostCard } from './PostCard';
import { getAllPosts, deletePost } from '../Modules/PostManager'
import { useNavigate } from 'react-router-dom';

export const PostList = () => {
    const [posts, setPosts] = useState([]);
  
    const getPosts = () => {
      return getAllPosts().then(postsFromAPI => {
        setPosts(postsFromAPI)
      });
    };

    const handleDeletePost = id => {
      deletePost(id)
      .then(() => getAllPosts().then(setPosts));
    };

    
  
     useEffect(() => {
       getPosts();
     }, []);

    const navigate = useNavigate();
  
    return (
      <>
        <section className="section-content">
          <button type="button" className="btn" onClick={() => {navigate("/posts/create")}}>Post</button>
        </section>
        <div className="container-cards">
          {posts.map(post => <PostCard key={post.id} post={post} handleDeletePost={handleDeletePost} />)}
        </div>
      </>
    );
  };