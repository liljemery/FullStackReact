import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const AddCommentForm = ({ articleName, onArticleUpdated }) => {
    const [name,setName] = useState('')
    const [commentText, setCommentText] = useState ('')

    const addComment = async () =>{
        const response = await axios.post(`http://localhost:8000/api/articles/${articleName}/comments`,{
            postedBy: name,
            text: commentText,
        })
        const updatedArticle = response.data
        onArticleUpdated(updatedArticle)
        setName('');
        setCommentText('');
    }

  return (
    <div className='container my-5'>
        <hr />
        <h3 className='display-4 text-center'>Add a Comment</h3>
        <div className='d-flex flex-column align-items-center'>
            <label className='container d-flex flex-column'>
            <h1 className='display-6'>Name:</h1>
            <input
                value={name}
                onChange={e => setName(e.target.value)}
                type='text'/>
            </label>
            <label className='container d-flex flex-column'>
            <h1 className='display-6'>Comment:</h1>
                <textarea 
                    value={commentText}
                    rows={4} 
                    cols={50}
                    onChange={e => setCommentText(e.target.value)}/>
            </label>
            <button 
            className='btn btn-primary mt-2 container'
            onClick={addComment}
            >Add Comment</button>
        </div>
    </div>
  )
}

export default AddCommentForm