import React from 'react'

const NotFound = () => {
  return (
    <>
    <div className='container text-center my-5'>
      <h1>Your page couldnt be found!</h1> 
      <em className='text-center'>We're working on it, give us just a few moments...</em>
      <img src="./robot.jpg" alt="" id='notFoundPhoto' />
    </div>

    </>
  )
}

export default NotFound