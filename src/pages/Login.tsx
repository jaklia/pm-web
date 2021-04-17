import { FC, useState } from 'react'
import { useDispatch } from 'react-redux';
import { loginRequest } from '../state/auth/actions/login';
import "../styles/Login.css"



export const Login: FC = () => {
  const dispatch = useDispatch();
  const [userName, setName] = useState("");
  const [password, setPassword] = useState("");
  // useEffect(() => {
  //   console.log(userName, password)
  // }, [userName, password])
  return (
    <div className='bg'>
      {/* <h1>login</h1> */}
      {/* <div className='centerThing'> */}
      <form className='loginForm'
        onSubmit={(e) => {
          // prevent the default behavior (putting name and password as path params)
          e.preventDefault();
          // TODO:   extract this to auth saga
          // AuthApi.login(userName, password);
          dispatch(loginRequest({ userName, password }));

        }}
      >
        <div className='formField'>
          <label className='formFieldLabel' htmlFor='username'>
            Name
          </label>
          <input type='text'
            className='formFieldInput'
            name='username'
            value={userName}
            onChange={e => setName(e.target.value)} />
        </div>
        <div className='formField'>
          <label className='formFieldLabel' htmlFor='password'>
            Password
          </label>
          <input type='password'
            className='formFieldInput'
            name='password'
            value={password}
            onChange={e => setPassword(e.target.value)} />
        </div>
        <input className='loginButton' type='submit' value='Login' />
      </form>
      {/* </div> */}
    </div>
  )
}
export default Login;
