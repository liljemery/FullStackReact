import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import  axios  from 'axios'
import articles from '../article-content';
import NotFound from './NotFound';
import CommentsList from './Reusable Components/CommentList';

const ArticlePage = () => {
  const [ articleInfo, setArticleInfo ] = useState({upvotes: 0, comments: []});
  const { articleId } = useParams();

  useEffect(() => {
    const loadArticleInfo = async () =>{
      const response = await axios.get(`http://localhost:8000/api/articles/${articleId}`)
      const newArticleInfo = response.data;
      setArticleInfo({upvotes: newArticleInfo.upvotes, comments: newArticleInfo.comments})
    }
    loadArticleInfo();
  },[]);
  const article = articles.find( article => article.name === articleId);

  if(!article){return <NotFound/>}

  return (
    <>
    <div className='container'>
      <h1>{article.title}</h1>
      <em>This article has  { articleInfo.upvotes } upvote(s)</em>
      <div className='mt-3'>
        {article.content.map((paragraph, i) =>(
          <p key={i}>{paragraph}</p>
        ))}
      </div>
      <CommentsList
        comments={articleInfo.comments}
      />
    </div>
    </>
  )
}

export default ArticlePage