import React, { FC, useEffect } from 'react'
import { Button, Table } from 'react-bootstrap';
import { FiEdit, FiTrash } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux'
import PmTable from '../components/table';
import { Project } from '../models/project';
import { getProjectsRequest } from '../state/projects/actions/get';
import { IApplicationState } from '../state/store'

const Projects: FC = () => {
  const store = useSelector((state: IApplicationState) => {
    return state.app.projects
  });
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("inside useeffect")
    dispatch(getProjectsRequest())
  }, [dispatch]);


  return (
    <div >

      <PmTable<Project>
        header={['Name', 'Description']}
        data={store.projects}
        renderRow={(project) =>
        (
          <>
            <td>{project.name}</td>
            <td>{project.description}</td>
          </>
        )
        }
      />
    </div>
  )
}
export default Projects;

