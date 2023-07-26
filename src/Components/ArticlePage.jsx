import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import  axios  from 'axios'
import articles from '../article-content';
import NotFound from './NotFound';
import CommentsList from './Reusable Components/CommentList';
import AddCommentForm from './Reusable Components/AddCommentForm';
import useUser from './hooks/useUser';


const ArticlePage = () => {
  const [ articleInfo, setArticleInfo ] = useState({upvotes: null, comments: [], canUpvote: false});
  const { canUpvote } = articleInfo;
  const { articleId } = useParams();
  const {user, isLoading} = useUser();

  useEffect(() => {
    const loadArticleInfo = async () =>{
      const token = user && await user.getIdToken()
      const headers = token ? {authtoken: await user.getIdToken()}: {}
      const response = await axios.get(`http://localhost:8000/api/articles/${articleId}`,
      {headers}
      )
      const newArticleInfo = response.data;
      setArticleInfo(newArticleInfo)
    }
    loadArticleInfo();
  },[isLoading]);

  var addUpvote = async () =>{
    const token = user && await user.getIdToken();
    const headers = token ? {authtoken: token } : {}
    const response = await axios.put(`http://localhost:8000/api/articles/${articleId}/upvote`, null , {headers})
    const updatedArticle = response.data
    setArticleInfo(updatedArticle)
  }

  const article = articles.find( article => article.name === articleId);

  if(!article){return <NotFound/>}
  if(canUpvote){
    console.log('hola')
  }else{
    console.log('adios')
  }
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
          {user?
          <button onClick={addUpvote} className={canUpvote? 'btn btn-primary my-2' : 'btn btn-primary my-2 disabled' }>{canUpvote? 'Upvote' : 'Upvoted' }</button>
          :
          <button className='btn btn-primary my-2'> Log In to Upvote</button>
          }
        </div>
      </div>
      <hr />
      <CommentsList
        comments={articleInfo.comments}
      />
      {user?
      <AddCommentForm
      articleName={articleId}
      onArticleUpdated={updatedArticle => setArticleInfo(updatedArticle)}
      />
      :
      <button className='btn btn-primary mb-3 container'>Log In to leave a comment</button>
      }
    </div>
    </>
  )
}

export default ArticlePage