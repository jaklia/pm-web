import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRoomsRequest } from '../state/rooms/actions/get';
import { postRoomsRequest } from '../state/rooms/actions/post';
import { IApplicationState } from '../state/store'

export default function Rooms() {
  const roomStore = useSelector((store: IApplicationState) => store.app.rooms)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRoomsRequest());
  }, [dispatch]);

  return (
    <div>
      <h1>rooms</h1>
      <input type='button' value='add new' onClick={() => dispatch(postRoomsRequest({ name: 'asd', capacity: 20, id: 0 }))} />
      {roomStore.rooms.map(r => (<p key={r.id}>{r.name}</p>))}
    </div>
  )
}
