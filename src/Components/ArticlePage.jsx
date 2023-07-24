import React from 'react'
import { useParams } from 'react-router-dom';
import articles from '../article-content';
import NotFound from './NotFound';

const ArticlePage = () => {
  const { articleId } = useParams();
  const article = articles.find( article => article.name === articleId);
  if(!article){return <NotFound/>}

  return (
    <>
    <div className='container'>
      <h1>{article.title}</h1>
      <em>{article.name}</em>
      <div>
        {article.content.map((paragraph, i) =>(
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </div>
    </>
  )
}

export default ArticlePage