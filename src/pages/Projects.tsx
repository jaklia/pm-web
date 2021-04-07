import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProjectsRequest } from '../state/projects/actions/get';
import { postProjectsRequest } from '../state/projects/actions/post';
import { IApplicationState } from '../state/store'

export default function Projects() {
  const store = useSelector((state: IApplicationState) => {
    console.log("aaaaaasd")
    return state.app.projects
  });
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("inside useeffect")
    dispatch(getProjectsRequest())
  }, [dispatch]);


  return (
    <div>
      <h1>Projects</h1>
      <input type='button' onClick={() => alert('aasd')} value="add new" />
      {store && store.projects.map(project => (<p>{project.name}</p>))}
    </div>
  )
}


