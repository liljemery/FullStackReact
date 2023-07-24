import React from 'react'

const CommentsList = ({ comments }) => {
  return (
    <>
        <h3 className='display-5'>Comments</h3>

        {comments.map(comments =>(
            <div className='container my-5'>
                <h5>
                    {comments.postedBy}
                </h5>
                <p>
                    {comments.text}
                </p>
                <hr />
            </div>
        ))}
    </>
  )
}

export default CommentsList