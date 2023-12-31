import React from 'react'

const CommentsList = ({ comments }) => {
  return (
    <>
        <h3 className='display-5'>Comments</h3>

        {comments.map((comments, i) =>(
            <div className='container my-5 comments' key={i}>
                <div className='d-flex align-items-center'>
                    <svg className='mx-3 bi bi-person' xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                    </svg>
                    <h5 className='mt-2'>
                        {comments.postedBy}
                    </h5>
                </div>
                    <hr />
                <p className='ms-4'>
                    {comments.text}
                </p>
            </div>
        ))}
    </>
  )
}

export default CommentsList