import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddNewButton } from '../components/addNewButton';
import PmTable from '../components/table';
import { Room } from '../models/room';
import { getRoomsRequest } from '../state/rooms/actions/get';
import { postRoomsRequest } from '../state/rooms/actions/post';
import { IApplicationState } from '../state/store';

export default function Rooms() {
  const rooms = useSelector((store: IApplicationState) => store.app.rooms.rooms);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRoomsRequest());
  }, [dispatch]);

  const renderRow = (room: Room) => (
    <>
      <td>{room.name}</td>
      <td>{room.capacity}</td>
    </>
  );

  return (
    <div style={{ width: '90%', margin: 32 }}>
      <AddNewButton onClick={() => {}} />
      <PmTable<Room>
        header={['Name', 'Capacity']}
        data={rooms}
        onEdit={() => {}}
        onDelete={() => {}}
        renderRow={renderRow}
      />
    </div>
  );
}
