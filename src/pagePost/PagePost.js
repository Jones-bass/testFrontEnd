import React, { useEffect, useState } from 'react';
import Post from '../components/Post/Post';
import axios from 'axios';

const PagePost = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/data')
      .then((response) => {
        setPosts(response.data);
      });
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
};

export default PagePost;
