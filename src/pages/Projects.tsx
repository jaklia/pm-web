import React, { FC, useEffect, useState } from 'react';
import { Modal, Button, ButtonGroup, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import PmTable from '../components/table';
import { Project } from '../models/project';
import { getProjectsRequest } from '../state/projects/actions/get';
import { IApplicationState } from '../state/store';

import { FiPlus } from 'react-icons/fi';
import { PmTextField } from '../components/pmTextField';
import { putProjectsRequest } from '../state/projects/actions/put';
import { postProjectsRequest } from '../state/projects/actions/post';
import { editProjectRequest } from '../state/projects/actions/edit';

const Projects: FC = () => {
  const store = useSelector((state: IApplicationState) => {
    return state.app.projects;
  });
  const isRequesting = useSelector((state: IApplicationState) => state.app.projects.isRequesting);
  const editing = useSelector((state: IApplicationState) => state.app.projects.editing);

  const dispatch = useDispatch();
  useEffect(() => {
    console.log('inside useeffect');
    dispatch(getProjectsRequest());
  }, [dispatch]);

  // close the editing modal when we get a response
  useEffect(() => {
    if (show && !editing) {
      handleClose();
    }
  });

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
  const handleShow = () => {
    dispatch(editProjectRequest());
    setShow(true);
  };
  const handleSave = () => {
    if (edited.id === 0) {
      dispatch(postProjectsRequest(edited));
    } else {
      dispatch(putProjectsRequest(edited));
    }
  };

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
        onDelete={(p) => {
          alert(`delete ${p.name}?`);
        }}
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
          <PmTextField
            type={'text'}
            label={'Name'}
            value={edited.name}
            onChange={(value) => {
              setEdited({ ...edited, name: value });
            }}
          />
          <PmTextField
            type={'text'}
            label={'Description'}
            value={edited.description}
            onChange={(value) => {
              setEdited({ ...edited, description: value });
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <ButtonGroup style={{ display: 'flex', flex: 1 }}>
            <Button variant='outline-secondary' onClick={handleClose}>
              Cancel
            </Button>
            <Button variant='success' onClick={handleSave}>
              {edited.id === 0 ? 'Create' : 'Save'}
              {isRequesting && <Spinner size='sm' animation='border' />}
            </Button>
          </ButtonGroup>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default Projects;
