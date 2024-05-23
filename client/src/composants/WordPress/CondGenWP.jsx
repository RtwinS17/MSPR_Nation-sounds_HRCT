import React, { useEffect, useState } from 'react';
import { MainContent } from '../Permanent/homeCard.component';
import './CondGenWP.style.css'
    
const ConditionsPage = () => {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://nationsounds.online/wp-json/wp/v2/posts/122') // 122 is the ID of the article
      .then(response => response.json())
      .then(data => {
        setArticle(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching article:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching article: {error.message}</div>;
  }

  if (!article || !article.title || !article.content) {
    return <div>Article not found or incomplete data.</div>;
  }

  return (
   <MainContent> 
     <div className=""> 
      <div className="mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">{article.title.rendered}</h1>
        <div className="text-base text-white"
          dangerouslySetInnerHTML={{ __html: article.content.rendered }}
        ></div>
      </div>
    </div>
    </MainContent> 
    );
};

export default ConditionsPage;