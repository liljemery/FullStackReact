import React from 'react'
import { useParams } from 'react-router-dom';
import articles from '../article-content'

const ArticlePage = () => {
  const { articleId } = useParams();
  const {name, title, content} = articles.find( article => article.name === articleId);
  
  return (
    <>
    <div className='container'>
      <h1>{title}</h1>
      <em>{name}</em>
      <div>
        {content.map((paragraph, i) =>(
          <p key={i }>{paragraph}</p>
        ))}
      </div>
    </div>
    </>
  )
}

export default ArticlePage