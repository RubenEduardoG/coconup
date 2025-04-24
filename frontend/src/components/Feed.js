import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Cambiá la URL si es distinta en tu backend
    axios.get('http://localhost:5000/api/posts')
      .then(response => setPosts(response.data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  return (
    <div>
      <h2>Publicaciones</h2>
      {posts.map(post => (
        <div key={post._id} style={{ border: '1px solid #ccc', margin: '1rem 0', padding: '1rem' }}>
          <h3>{post.title}</h3>
          <p>{post.description}</p>
          {post.imageUrl && <img src={post.imageUrl} alt={post.title} style={{ width: '100%', maxWidth: '400px' }} />}
        </div>
      ))}
    </div>
  );
}

export default Feed;
