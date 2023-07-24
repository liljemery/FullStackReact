import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const AddCommentForm = ({ articleName, onArticleUpdated }) => {
    const [name,setName] = useState('')
    const [commentText, setCommentText] = useState ('')
    const [isEmpty, setIsEmpty ] = useState(false)

    const addComment = async () =>{
        if(commentText === ''|| name === ''){
            setIsEmpty(true)
        }else{
            const response = await axios.post(`http://localhost:8000/api/articles/${articleName}/comments`,{
                postedBy: name,
                text: commentText,
            })
            const updatedArticle = response.data
            onArticleUpdated(updatedArticle)
            setName('');
            setCommentText('');
            setIsEmpty(false);
        }
    }

  return (
    <div className='container my-5'>
        <hr />
        <h3 className='display-4 text-center'>Add a Comment</h3>
        <div className='d-flex flex-column align-items-center'>
            {isEmpty? <h5 className='bg-danger text-white container text-center py-1 border-100'>Please, fullfill all the labels</h5>: ''}
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
            ><h5>Add Comment</h5></button>
        </div>
    </div>
  )
}

export default AddCommentForm