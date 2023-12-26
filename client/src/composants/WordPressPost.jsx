import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function WordPressPost({ slug }) {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const apiUrl = `http://127.0.0.1:8000/api/wordpress/posts?slug=${slug}`;
    
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setPost(data[0]);
      })
      .catch(error => console.error('Error:', error));
  }, [slug]);

  if (!post) {
    return <div className="alert alert-info">Chargement...</div>;
  }

  return (
    <article className="mx-auto" style={{ width: '50%' }}>
      <h1 className="display-4 text-primary">{post.title.rendered}</h1>
      <div className="article-content text-success" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </article>
  );
}

export default WordPressPost;
