import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import useUser from '../hooks/useUser';

const AddCommentForm = ({ articleName, onArticleUpdated }) => {
    const [ commentText, setCommentText ] = useState ('')
    const { user } = useUser();
    const [ isEmpty, setIsEmpty ] = useState(false)

    const addComment = async () =>{
        const token = user && await user.getIdToken();

        const headers = token ? {authToken: token } : {}

        if(commentText === ''){

            setIsEmpty(true)

        }else{
            const response = await axios.post(`http://localhost:8000/api/articles/${articleName}/comments`,
            {   
                postedBy: user.email,
                text: commentText,
            },
            { 
                headers
            },
            )
            const updatedArticle = response.data
            onArticleUpdated(updatedArticle)
            setCommentText('');
            setIsEmpty(false);
        }
    }

  return (
    <div className='container my-5'>
        <hr />
        <h3 className='display-4 text-center'>Add a Comment</h3>
        <div className='d-flex flex-column '>
            {user && <p className='h6 inherit'>You are posting as: {user.email}...</p>}
            {isEmpty? <h5 className='bg-danger text-white container text-center py-1 border-100'>Please, fullfill all the labels</h5>: ''}
            <label className=' w-100 d-flex flex-column'>
            <textarea 
                value={commentText}
                rows={4} 
                cols={50}
                onChange={e => setCommentText(e.target.value)}/>
            </label>
            <button 
            className='btn btn-primary mt-2 w-100'
            onClick={addComment}
            ><h5>Add Comment</h5></button>
        </div>
    </div>
  )
}

export default AddCommentForm