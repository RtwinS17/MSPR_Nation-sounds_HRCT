import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MainContent } from '../Permanent/homeCard.component';
import './DetailArtistesWP.style.css';

const DetailsArtistesWP = () => {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get('https://nationsounds.online/wp-json/wp/v2/posts/33');
        setArticle(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(error);
        setLoading(false);
      }
    };

    fetchArticle();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching article: {error.message}</div>;
  }

  if (!article) {
    return <div>Article not found.</div>;
  }

  return (
    <MainContent><div className="pl-4 pr-4">
      <h2 className="text-2xl font-bold mb-6">{article.title.rendered}</h2>
      <div className="text-xl " dangerouslySetInnerHTML={{ __html: article.content.rendered }} />
    </div>
  </MainContent>);
};

export default DetailsArtistesWP;
