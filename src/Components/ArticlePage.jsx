import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import  axios  from 'axios'
import articles from '../article-content';
import NotFound from './NotFound';
import CommentsList from './Reusable Components/CommentList';

const ArticlePage = () => {
  const [ articleInfo, setArticleInfo ] = useState({upvotes: null, comments: []});
  const { articleId } = useParams();

  useEffect(() => {
    const loadArticleInfo = async () =>{
      const response = await axios.get(`http://localhost:8000/api/articles/${articleId}`)
      const newArticleInfo = response.data;
      setArticleInfo({upvotes: newArticleInfo.upvotes, comments: newArticleInfo.comments})
    }
    loadArticleInfo();
  },[]);

  var addUpvote = async () =>{
    const response = await axios.put(`http://localhost:8000/api/articles/${articleId}/upvote`)
    const updatedArticle = response.data
    setArticleInfo(updatedArticle)
  }
  var addDownvote = async () =>{
    const response = await axios.put(`http://localhost:8000/api/articles/${articleId}/downvote`)
    const updatedArticle = response.data
    setArticleInfo(updatedArticle)
  }


  const article = articles.find( article => article.name === articleId);

  if(!article){return <NotFound/>}

  return (
    <>
    <div className='container'>
      <h1>{article.title}</h1>
      <em>This article has  { articleInfo.upvotes } vote(s)</em>
      <div className='mt-3'>
        {article.content.map((paragraph, i) =>(
          <p key={i}>{paragraph}</p>
        ))}
        <div className='d-flex justify-content-between'>
        <button onClick={addUpvote} className='btn btn-primary my-2'>Upvote</button>

        <button onClick={addDownvote} className='btn btn-primary my-2'>Downvote</button>

        </div>
      </div>
      <CommentsList
        comments={articleInfo.comments}
      />
    </div>
    </>
  )
}

export default ArticlePage