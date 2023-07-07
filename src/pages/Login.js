import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from '../styles/SignIn.css'


const Login = ({login}) => {
    const formRef = useRef()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
      e.preventDefault()
      const formData = new FormData(formRef.current)
      const data = Object.fromEntries(formData)
      const userInfo = {
        "user": {email: data.email, password: data.password}
      }
      login(userInfo)
      navigate("/")
      e.target.reset()
    }
  
  return (
    <>
    <div className='signinBody'>
      <div>SignIn</div>
      <form ref={formRef} onSubmit={handleSubmit} className='signInForm'>
        Email: <input  type='email' name='email' placeholder='example@email.com'/>
        <br/>
        Password: <input  type='password' name='password' placeholder='password'/>
        <input type='submit' value="Submit"/>
      </form>

    </div>
    </>
  )
}

export default Login