import { Link } from 'react-router-dom'

const ArticleList = ({ articles }) => {
    return (
      <>
        <div className='container'>
          {articles.map(article =>(
            <div  key={article.name} className='py-3 container'>
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

  export default ArticleList;
