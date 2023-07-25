import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [error, setError ] = useState('')
  const navigate = useNavigate();
  
  const signIn = async () => {
    try{
      if(password != passwordConfirm){
        setError(`Password doesn't match`)
      }
      await createUserWithEmailAndPassword(getAuth(), email, password)
      navigate('/articles')
    }catch (e){
      setError(e.message)
    }
  }

  return (
    <>
    <div>
    <div className='d-flex flex-column w-50 mx-auto'>
      <div className='text-center mb-5'>
        <h1 className='display-5'>Create an account</h1>
        <em className='h6'>To be part of the best blog community</em>
      </div>

      <div className='logReg pt-3 pb-3 px-3 container mx-auto'>
        {error ? <h5 className='rounded bg-danger text-white container text-center py-1 border-100'>{error}</h5>: ''}
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
        <h5 className='mt-3'>Confirm your assword:</h5>
        <input
        type="password" 
        className='w-100 rounded p-2'
        placeholder='Password' 
        value={passwordConfirm}
        onChange={e => setPasswordConfirm(e.target.value)}
        />
        <p className='pt-4'><em> Already have an account?, you can <b className='font-weight-bold'><Link to='/login'>Login here!</Link></b></em></p>
        <button 
        className='btn btn-primary mt-5 w-100'
        onClick={signIn}
        >
          Register
        </button>
      </div>
    </div>
    </div>
    </>
  )
}


export default Register