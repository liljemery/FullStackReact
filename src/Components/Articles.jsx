import React from 'react'
import articles from '../article-content'
import ArticleList from './Reusable Components/relatedArticles'


const Articles = () => {
  return (
    <>
      <div className='container'>
        <h1 className='display-5'>Articles</h1>
        <ArticleList
          articles={articles}
        />
      </div>
    </>
  )
}

export default Articles