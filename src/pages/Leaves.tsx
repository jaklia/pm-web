import React, { FC, useEffect } from 'react';
import { FiCheck, FiX } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { AddNewButton } from '../components/addNewButton';
import PmTable from '../components/table';
import { Leave } from '../models/leave';
import { getLeavesRequest } from '../state/leaves/actions/get';
import { IApplicationState } from '../state/store';

const Leaves: FC = () => {
  const leaves = useSelector((state: IApplicationState) => state.app.leaves.leaves);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLeavesRequest());
  }, [dispatch]);

  const renderRow = (leave: Leave) => {
    return (
      <>
        <td>{leave.userId}</td>
        <td>{leave.startDate}</td>
        <td>{leave.endDate}</td>
        <td>{leave.approved ? <FiCheck color='success' /> : <FiX color='danger' />}</td>
      </>
    );
  };

  return (
    <div style={{ width: '90%', margin: 32 }}>
      <AddNewButton onClick={() => {}} />
      <PmTable<Leave>
        header={['User', 'From', 'To', 'Approved']}
        data={leaves}
        onEdit={() => {}}
        onDelete={() => {}}
        renderRow={renderRow}
      />
    </div>
  );
};
export default Leaves;
