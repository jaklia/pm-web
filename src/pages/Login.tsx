import { FC } from 'react'
import "../styles/Login.css"



export const Login: FC = () => {
  return (
    <div className='bg'>
      <h1>login</h1>
      {/* <div className='centerThing'> */}
      <form className='loginForm'>
        <div className='formField'>
          <label className='formFieldLabel' htmlFor='username'>
            Name
          </label>
          <input className='formFieldInput' type='text' name='username' />
        </div>
        <div className='formField'>
          <label className='formFieldLabel' htmlFor='password'>
            Password
          </label>
          <input className='formFieldInput' type='password' name='password' />
        </div>
        <input className='loginButton' type='submit' value='Login' />
      </form>
      {/* </div> */}
    </div>
  )
}
export default Login;
