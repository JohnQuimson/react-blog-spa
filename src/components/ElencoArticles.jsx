import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ArticleCard from './ArticleCard';
const apiUrl = import.meta.env.VITE_BASE_API_URL;

const ElencoArticles = () => {
  const [articles, setArticles] = useState(null);

  const fetchArticles = async () => {
    const { data: response } = await axios.get(`${apiUrl}/posts`);
    setArticles(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <>
      <div className="articles">
        {articles === null && 'Loading...'}
        {articles?.length === 0 && 'No articles found'}
        {articles?.length > 0 &&
          articles.map((a) => (
            <ArticleCard
              key={`article${a.id}`}
              title={a.title}
              content={a.content}
              imageUrl={a.img}
              category={a.category.name}
              tags={[a.tags.map((t) => t.name)]}
              status={a.published}
            />
          ))}
      </div>
    </>
  );
};

export default ElencoArticles;
