import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { IApplicationState } from '../state/store';
import { getUsersRequest } from '../state/users/actions/get';

export const Users: FC = () => {
  const store = useSelector((state: IApplicationState) => state.app.users)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersRequest());
  }, [dispatch])

  return (
    <div>
      <h1>users</h1>
      {
        store.users.map(user => <p key={user.id}>{user.userName}</p>)
      }
    </div>
  )
}
export default Users;
