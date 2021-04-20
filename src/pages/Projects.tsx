import React, { FC, useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import PmTable from '../components/table';
import { Project } from '../models/project';
import { getProjectsRequest } from '../state/projects/actions/get';
import { IApplicationState } from '../state/store';

import { FiPlus } from 'react-icons/fi';

const Projects: FC = () => {
  const store = useSelector((state: IApplicationState) => {
    return state.app.projects;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('inside useeffect');
    dispatch(getProjectsRequest());
  }, [dispatch]);

  const [show, setShow] = useState(false);
  const [edited, setEdited] = useState<Project>({
    id: 0,
    name: '',
    description: '',
    issueCount: 0,
  });

  const handleClose = () => {
    setShow(false);
    setEdited({ id: 0, name: '', description: '', issueCount: 0 });
  };
  const handleShow = () => setShow(true);

  return (
    <div style={{ width: '90%', margin: 32 }}>
      <Button
        style={{
          display: 'flex',
          alignContent: 'center',
          alignItems: 'center',
        }}
        variant='outline-success'
        onClick={handleShow}>
        <FiPlus />
        <span>Add new</span>
      </Button>
      <PmTable<Project>
        header={['Name', 'Description']}
        data={store.projects}
        onEdit={(project) => {
          handleShow();
          setEdited(project);
        }}
        onDelete={(p) => alert(`delete ${p.name}?`)}
        renderRow={(project) => (
          <>
            <td>{project.name}</td>
            <td>{project.description}</td>
          </>
        )}
      />

      <Modal show={show} onHide={handleClose} backdrop='static' keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>{edited.id === 0 ? 'Create project' : 'Edit project'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <label htmlFor='pName'>Name</label>
            <input name='pName' type='text' />
          </div>
          <div>
            <label htmlFor='pDescription'>Description</label>
            <input name='pDescription' type='text' />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='outline-secondary' onClick={handleClose}>
            Cancel
          </Button>
          <Button variant='success'>{edited.id === 0 ? 'Create' : 'Save'}</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default Projects;
