import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError ] = useState('')
  const navigate = useNavigate();

  const logIn = async () => {
    try{
      await signInWithEmailAndPassword(getAuth(), email, password)
      navigate('/articles')
    }catch (e){
      setError(e.message)
    }
  }

  const handleSubmit = (e) =>{
    if(email === ''|| password === ''){
      setError('Please fullfil all the labels')
    }
    // else if(!email){
    //   setError(<Link to='/register'>Register here!</Link>)
    // }
    else{
      logIn();
      setEmail('')
      setPassword('')
      setError('')
    }
  }
  return (
    <>
    <div className='d-flex flex-column'>
      <div className='text-center mb-5'>
        <h1 className='display-5'>Log In into your Account</h1>
        <em className='h6'>So you can vote the blogs and comment on them</em>
      </div>

      <div className='logReg pt-3 pb-3 px-3 container mx-auto'>
        {error? <h5 className='bg-danger text-white container text-center py-1 border-100'>{error}</h5>: ''}
        <h5 className=''>Email:</h5>
        <input type="email" 
        className='w-100 mb-4 rounded p-2'
         placeholder='email@email.com' 
         value={email}
         onChange={e => setEmail(e.target.value)}
         />
        
        <h5 className=''>Password:</h5>
        <input
        type="password" 
        className='w-100 rounded p-2'
        placeholder='Password' 
        value={password}
        onChange={e => setPassword(e.target.value)}
        />
        <p className='pt-4'><em> Don't have an account?, you can <b className='font-weight-bold'><Link to='/register'>Register here!</Link></b></em></p>
        <button 
        className='btn btn-primary mt-5 w-100'
        onClick={handleSubmit}
        >
          Login
        </button>
      </div>
    
    </div>
    </>
  )
}

export default Login