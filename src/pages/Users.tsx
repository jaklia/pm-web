import React, { FC, useEffect } from 'react';
import { Button, Row, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { IApplicationState } from '../state/store';
import { getUsersRequest } from '../state/users/actions/get';

import { FaEdit, FaTrash } from 'react-icons/fa';
import { FiEdit, FiTrash } from 'react-icons/fi';

export const Users: FC = () => {
  const store = useSelector((state: IApplicationState) => state.app.users);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersRequest());
  }, [dispatch]);

  return (
    <div>
      <h1>users</h1>
      <Table striped bordered hover>
        <thead>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th></th>
        </thead>
        <tbody>
          {store.users.map((user) => (
            <tr
              onMouseEnter={() => console.log(`in ${user.id}`)}
              onMouseLeave={() => console.log(`out ${user.id}`)}>
              <td style={{ verticalAlign: 'middle' }}>{user.userName}</td>
              <td style={{ verticalAlign: 'middle' }}>{user.email}</td>
              <td style={{ verticalAlign: 'middle' }}>{user.phoneNumber}</td>

              <td style={{ verticalAlign: 'middle' }}>
                <Button variant='outline-primary'>
                  <FiEdit />
                </Button>
                {/* <Button variant='outline-warning'>
                      <i className='glyphicon glyphicon-remove'></i>
                    </Button> */}
                <Button variant='outline-danger'>
                  <FiTrash />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
export default Users;
