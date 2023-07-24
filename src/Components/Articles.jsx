import React from 'react'
import { Link } from 'react-router-dom'
import articles from '../article-content'

const Articles = () => {
  return (
    <>
      <div className='container'>
        <h1 className='display-5'>Articles</h1>
        {articles.map(article =>(
          <div className='py-3 container'>
            <Link to={`/articles/${article.name}`} className='artBtn'>
              <h3 className=''>
                {article.title}
              </h3>
              <em>{article.content[0].substring(0,150).concat("...")}</em>
            </Link>
            <hr />
          </div>
        ))}
      </div>
    </>
  )
}

export default Articles