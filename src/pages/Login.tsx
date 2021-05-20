import { FC, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory, useLocation, useParams } from 'react-router-dom';
import { loginRequest } from '../state/auth/actions/login';
import { IApplicationState } from '../state/store';
import '../styles/Login.css';

export const Login: FC = () => {
  const dispatch = useDispatch();
  const [userName, setName] = useState('');
  const [password, setPassword] = useState('');
  const authenticated = useSelector<IApplicationState, boolean>(
    (state) => state.app.auth.authenticated
  );

  //  TODO:  maybe pass the history and pathname stuff
  //     along with the login_request action
  //     and try hacking the history in the saga

  let history = useHistory();
  let location: any = useLocation();

  let { from } = location.state || { from: { pathname: '/users' } };

  // tried this , but it crashes, as it's unsafe (it says so in the error msg)
  // useEffect(() => {
  //   if (authenticated) {
  //     history.replace(from.pathname);
  //   } else {
  //     history.replace('/')
  //   }
  // },
  //   [authenticated, history, from])

  // found somewhere, but it's
  // let login = () => {
  //   auth.signin(() => {
  //     history.replace(from);
  //   });
  // };

  // this works, but gives a warning (cannot update during state transition)
  // if (authenticated) {
  //   const newRoute = from ?? { pathname: "/users" };
  //   history.replace(newRoute);
  // }
  console.log(location);

  if (authenticated) {
    return <Redirect to={'/welcome'} />;
  }

  return (
    <div className='bg'>
      {/* <h1>{authenticated ? 'true' : 'false'}</h1> */}
      <form
        className='loginForm'
        // onSubmit={(e) => {
        //   // prevent the default behavior (putting name and password as path params)
        //   e.preventDefault();
        //   dispatch(loginRequest({ userName, password }));
        // }}
      >
        <div className='formField'>
          <label className='formFieldLabel' htmlFor='username'>
            Name
          </label>
          <input
            type='text'
            className='formFieldInput'
            name='username'
            value={userName}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='formField'>
          <label className='formFieldLabel' htmlFor='password'>
            Password
          </label>
          <input
            type='password'
            className='formFieldInput'
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <input
          className='loginButton'
          type='submit'
          value='Login'
          onClick={(e) => {
            // prevent the default behavior (putting name and password as path params)
            e.preventDefault();
            dispatch(loginRequest({ userName, password }));
          }}
        />
      </form>
      {/* </div> */}
    </div>
  );
};
export default Login;
